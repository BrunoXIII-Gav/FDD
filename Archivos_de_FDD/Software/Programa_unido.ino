#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <SoftwareSerial.h>

// Definiciones para el PMS3003
SoftwareSerial pmsSerial(16, 17); // RX, TX
unsigned int pm1 = 0;
unsigned int pm2_5 = 0;
unsigned int pm10 = 0;

// Definiciones para el MAX4466
const int sampleWindow = 50; 
unsigned int sample;
#define SENSOR_PIN_MAX4466 32
unsigned int signalMax = 0;
unsigned int signalMin = 4095;

// Definiciones para el MQ7
const int sensorPinMQ7 = 35;
int sensorValue = 0;
float voltage = 0.0;
float ppm = 0.0;

float voltajeAireLimpio = 0.4; // Voltaje en aire limpio
float voltaje200ppm = 1.2; // Voltaje a 200 ppm

const char* ssid = "VILLA";
const char* password = "08687286";
const char* serverUrl = "http://192.168.18.10:8080/datos";

void setup() {
  pinMode(SENSOR_PIN_MAX4466, INPUT);
  Serial.begin(115200);
  pmsSerial.begin(9600);
  
  // Conectar a WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("WiFi conectado");
}

void loop() {
  // Lectura y procesamiento para MAX4466
  unsigned long startMillis = millis();
  signalMax = 0;
  signalMin = 4095;

  while (millis() - startMillis < sampleWindow) {
    sample = analogRead(SENSOR_PIN_MAX4466);
    if (sample < 4095) {
      if (sample > signalMax) {
        signalMax = sample;
      }
      if (sample < signalMin) {
        signalMin = sample;
      }
    }
  }

  int db = map(signalMax - signalMin, 920, 4095, 15, 125);

  // Lectura y procesamiento para MQ7
  sensorValue = analogRead(sensorPinMQ7);
  voltage = sensorValue * (3.3 / 4095.0);
  if (voltage >= voltajeAireLimpio) {
    ppm = (voltage - voltajeAireLimpio) * (200 / (voltaje200ppm - voltajeAireLimpio));
  } else {
    ppm = 0; // Asumir que no hay CO detectable
  }

  // Lectura de PMS3003
  if (pmsSerial.available()) {
    int index = 0;
    char value;
    char previousValue;
    bool headerFound = false;

    while (pmsSerial.available()) {
      value = pmsSerial.read();
      if (index == 0 && value == 0x42) {
        headerFound = true;
      }
      if (headerFound) {
        if (index == 1 && value != 0x4d) {
          headerFound = false;
        }
        if (index == 2) {
          pm1 = value << 8;
        } else if (index == 3) {
          pm1 |= value;
        } else if (index == 4) {
          pm2_5 = value << 8;
        } else if (index == 5) {
          pm2_5 |= value;
        } else if (index == 6) {
          pm10 = value << 8;
        } else if (index == 7) {
          pm10 |= value;
        }
        index++;
        if (index > 7) {
          break;
        }
      }
    }

    if (!headerFound) {
      Serial.println("No se encuentra el encabezado de datos.");
    } else {
      Serial.print("PM1.0: ");
      Serial.println(pm1);
      Serial.print("PM2.5: ");
      Serial.println(pm2_5);
      Serial.print("PM10: ");
      Serial.println(pm10);
    }
  }

  // Enviar datos al servidor
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    String httpRequestData = "{\"pm10\":\"" + String(pm10) + "\",\"pm2_5\":\"" + String(pm2_5) + "\",\"co\":\"" + String(ppm) + "\",\"decibeles\":\"" + String(db) + "\"}";
    int httpResponseCode = http.POST(httpRequestData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(response);
    } else {
      Serial.print("Error en el código HTTP: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  } else {
    Serial.println("Error en la conexión WiFi");
  }

  delay(1000); 
}
