#include <SoftwareSerial.h>

// PMS3003
SoftwareSerial pmsSerial(16, 17); // RX, TX
unsigned int pm1 = 0;
unsigned int pm2_5 = 0;
unsigned int pm10 = 0;

// MAX4466
const int sampleWindow = 50; 
unsigned int sample;
#define SENSOR_PIN_MAX4466 32
unsigned int signalMax = 0;
unsigned int signalMin = 4095;

// MQ7
const int sensorPinMQ7 = 35;
int sensorValue = 0;
float voltage = 0.0;
float ppm = 0.0;

void setup() {
  pinMode(SENSOR_PIN_MAX4466, INPUT);
  Serial.begin(115200);
  pmsSerial.begin(9600);
}

void loop() {
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
  Serial.print("Decibeles: ");
  Serial.println(db);

  // Lectura y procesamiento para MQ7
  sensorValue = analogRead(sensorPinMQ7);
  voltage = sensorValue * (3.3 / 4095.0);
  ppm = (voltage - 0.1) * 2000;
  Serial.print("CO (ppm): ");
  Serial.println(ppm);

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
      Serial.print("PM2.5: ");
      Serial.println(pm2_5);
      Serial.print("PM10: ");
      Serial.println(pm10);
    }
  }

  delay(1000); 
}