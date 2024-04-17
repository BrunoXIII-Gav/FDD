# ESTADO DEL ARTE

## 1.CONTEXTO CIENTÍFICO

### Artículo 1
![image]()

Este artículo describe el desarrollo de HypeAIR, un marco innovador de código abierto que simplifica y automatiza la calibración de sensores de calidad del aire de bajo costo (LCAQ). Se basa en la co-ubicación, lo que significa que coloca varios sensores en la misma ubicación para comparar y ajustar mediciones automáticamente. Asimismo, es adaptable a diferentes sensores y contaminantes, lo que permite un monitoreo hiperlocal en tiempo real.
HypeAIR integra dos metodologías de calibración: la primera se basa en una combinación de algoritmos de aprendizaje automático VR y SVR (Voting Regressor y Support Vector Regression), que tienen en cuenta la dependencia temporal de las observaciones, mientras que la segunda se basa en el algoritmo de aprendizaje profundo Long Short-Term Memory (LSTM), diseñado para ser flexible y personalizable, lo que permite la incorporación de nuevas metodologías.


### Artículo 2



## 2.CONTEXTO COMERCIAL

Patente 1: Low-Cost Air Quality Measurement System Based on Electrochemical and PM Sensors with Cloud Connection

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Captura%20de%20pantalla%202024-04-16%20212902.png)

La patente presenta un dispositivo portátil para la medición de la calidad del aire exterior que utiliza sensores electroquímicos y de material particulado (PM) con conexión a la nube. El prototipo diseñado recopila datos de concentración de los principales contaminantes atmosféricos, como NO2, NO, CO, O3, PM2.5 y PM10, así como de factores ambientales como temperatura, humedad, ubicación y fecha. Este sistema de bajo costo incorpora tecnología IoT que se conecta a Internet a través de un módulo GSM y envía todos los datos en tiempo real a una plataforma en la nube con capacidad de almacenamiento y procesamiento. Dos dispositivos idénticos fueron fabricados e instalados en una unidad móvil de referencia y desplegados en Badajoz, España. Los resultados de una campaña de campo de dos meses se presentan y publican, demostrando un buen rendimiento en la medición de contaminantes gaseosos y partículas PM mediante técnicas de regresión lineal y redes neuronales. 

El sistema incluye un diseño cuidadoso de la electrónica para reducir el ruido eléctrico y aumentar la precisión de las mediciones, con una operación general que implica la recopilación de datos por parte de un microcontrolador, el envío de estos datos al servidor NanoSen-AQM a través de un módulo GSM o Ethernet utilizando el protocolo de comunicación MQTT, almacenamiento de datos en una tarjeta SD y la posibilidad de verificación del funcionamiento mediante comunicación Bluetooth.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen_2024-04-16_215220941.png)

Patente 2: Protótipo de medidor de gases poluentes usando tecnologia de baixo custo

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Captura%20de%20pantalla%202024-04-16%20215327.png)

El prototipo consiste en un dispositivo que utiliza la plataforma Arduino, sensores eletroquímicos (MQ-7 y MQ-135) y un display OLED para medir la concentración de los gases CO y CO2, así como la temperatura y humedad del entorno. La información recopilada por los sensores se procesa a través de la plataforma Arduino y se muestra en el display OLED con indicadores de calidad del aire en colores verde, amarillo y rojo, representando niveles de concentración buenos, malos o peligrosos respectivamente.
Durante pruebas realizadas en ambientes abiertos y cerrados, se observó que la concentración de CO2 aumenta con la presencia de más personas en el lugar, mientras que la concentración de CO se incrementa cerca de fuentes emisoras como vehículos. Los resultados de las mediciones realizadas con el prototipo fueron comparados con los valores obtenidos por medidores comerciales, demostrando coherencia y precisión en las mediciones.

Este prototipo se destaca por su bajo costo en comparación con los equipos comerciales disponibles en el mercado, permitiendo medir la concentración de dos gases distintos de manera efectiva y accesible. Su diseño y funcionalidad lo hacen ideal para alertar a personas no especializadas sobre los niveles de concentración de gases en su entorno, contribuyendo así a la concienciación sobre la calidad del aire y la salud pública.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen_2024-04-16_215415869.png)


## 3.LISTA DE REQUERIMIENTOS FUNCIONALES 




## 4.LISTA DE REQUERIMIENTOS NO FUNCIONALES
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/2.png)

## 5.DEFINICIÓN DE SOLUCIÓN A IMPLEMENTAR


## 6.BIBLIOGRAFÍA

1. Arroyo, P., Gómez-Suárez, J., Suárez, J. I., & Lozano, J. (2021). Low-Cost Air Quality Measurement System Based on Electrochemical and PM Sensors with Cloud Connection. Sensors, 21(18), 6228. https://doi.org/10.3390/s21186228

2. Stefan, I. A., Ferreira, P., & Sousa, A. S. (2020). Protótipo de medidor de gases poluentes usando tecnologia de baixo custo. Principia/Revista Principia, 1(49), 31. https://doi.org/10.18265/1517-03062015v1n49p31-42
