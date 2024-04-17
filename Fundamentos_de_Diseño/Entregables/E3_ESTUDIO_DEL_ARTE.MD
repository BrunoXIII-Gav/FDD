# ESTADO DEL ARTE

## 1.CONTEXTO CIENTÍFICO

### Artículo 1:
![image]()

Este artículo describe el desarrollo de HypeAIR, un marco innovador de código abierto que simplifica y automatiza la calibración de sensores de calidad del aire de bajo costo (LCAQ). Se basa en la co-ubicación, lo que significa que coloca varios sensores en la misma ubicación para comparar y ajustar mediciones automáticamente. Asimismo, es adaptable a diferentes sensores y contaminantes, lo que permite un monitoreo hiperlocal en tiempo real.
HypeAIR integra dos metodologías de calibración: la primera se basa en una combinación de algoritmos de aprendizaje automático VR y SVR (Voting Regressor y Support Vector Regression), que tienen en cuenta la dependencia temporal de las observaciones, mientras que la segunda se basa en el algoritmo de aprendizaje profundo Long Short-Term Memory (LSTM), diseñado para ser flexible y personalizable, lo que permite la incorporación de nuevas metodologías.


### Artículo 2:

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/2_art%C3%ADculo_imagen_portada.png.png)

El artículo describe un estudio realizado en Huancayo , que enfrenta problemas de contaminación atmosférica, particularmente con material particulado fino (PM2.5). Debido a los altos costos de infraestructura y equipos de monitoreo convencionales, se emplearon sensores de bajo costo para evaluar la variación temporal y las fuentes de PM2.5 en tres sitios de la ciudad. . Se emplearon sensores PurpleAir PA-II modelo PMS5003 desde agosto de 2018 hasta junio de 2019. Los datos recopilados se analizaron estadísticamente para examinar cambios temporales y se utilizaron retrotrayectorias a través del modelo HYSPLIT para identificar las fuentes de emisión. Las mediciones se realizaron en tiempo real durante campañas simultáneas en los tres sitios, utilizando sensores Plantower modelo PMS5003 de PurpleAir, con una frecuencia de registro de datos por minuto. Estos sensores utilizan rayos láser que inciden sobre las partículas de diferentes tamaños que entran en el dispositivo. La luz reflejada por estas partículas es detectada por diodos receptores. Posteriormente, las señales recibidas son sometidas a filtrado y amplificación a través de filtros y circuitos electrónicos. Finalmente, mediante algoritmos complejos, estas señales son convertidas en concentraciones de PM2.5, proporcionando así mediciones precisas de la contaminación atmosférica (Zheng et al., 2018).

### Artículo 3:

### Low Cost Sensor with IoT LoRaWAN Connectivity and Machine Learning Based Calibration for Air Pollution Monitoring

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/3_articulo_imagen_portada.png)

El artículo se centra en el desarrollo y poder implementar un sensor de bajo costo para monitorear o controlar la contaminación del aire. Este sensor se caracteriza por su capacidad para conectarse a Internet de las Cosas (IoT) mediante la tecnología LoRaWAN, una red de área extensa de baja potencia, lo que facilita la recopilación y transmisión de datos durante el monitoreo del estado del aire de manera eficiente y económica. Este nodo sensor usa sensores electroquímicos para así poder lograr medir concentraciones de monóxido de carbono (CO) y dióxido de nitrógeno (NO2) y un sensor infrarrojo para medir niveles de partículas (PM).

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen2_articulo3.png)

También se utiliza técnicas de aprendizaje automático como la Regresión de Mínimos Cuadrados Ordinarios (OLS) para ajustar los valores básicos del sensor, minimizando las diferencias entre las lecturas del sensor y los valores de referencia. Luego, tenemos a la Regresión Lineal Múltiple (MLR) que ajusta una combinación de mediciones de contaminantes, temperatura y humedad para alinearlas mejor con las concentraciones de referencia, corrigiendo la respuesta del sensor según las condiciones ambientales. Adicionalmente, se implementan Redes Neuronales Artificiales (ANN), específicamente el Perceptrón Multicapa (MLP), que utiliza las respuestas del sensor y datos ambientales como entradas, y los datos de referencia como salida. 
Estas técnicas son cruciales, ya que permite ajustar y calibrar los sensores a las variaciones ambientales y a las características específicas de los contaminantes, lo que resulta en mediciones más precisas.




## 2.CONTEXTO COMERCIAL

Patente N°1:

Red de sensores para monitoreo de la calidad del aire ambiente 

Numero de publicación: WO/2023/042222

Fecha de Publicación: 23.03.2023

CIP: H04W 4/38 (2018.1) G01N 33/00 (2006.1)

La patente WO2023042222 describe un sistema avanzado de monitoreo de la calidad del aire ambiental a través una red de sensores inalámbricos de bajo costo, denominada SENSurAIR. Este sistema se enfoca en mejorar la precisión y validación de los datos del estado del aire en tiempo real, utilizando una técnica de calibración adaptativa en campo. La innovación radica en su capacidad para proporcionar monitoreo en tiempo real con alta resolución espacial y temporal de contaminantes como NOx, SOx, O3, CO, PM2.5 y PM10, superando las limitaciones de los sistemas de monitoreo actuales que presentan retrasos significativos en la reportación de datos y carecen de la densidad de medición necesaria para mapas detallados de contaminantes. La red SENSurAIR permite la recopilación eficiente de datos a través de una plataforma inalámbrica basada en GSM/Wi-Fi, facilitando la subida de datos a servidores seguros para su análisis y previsión. La calibración en campo de los sensores asegura la fiabilidad y exactitud de los datos, crucial para la formulación de medidas de control y la emisión de avisos de salud basados en el Índice de Calidad del Aire (AQI). Este sistema representa un avance significativo en la tecnología de monitoreo ambiental, ofreciendo una solución escalable y de costo económico para la vigilancia del estado del aire en tiempo real.


Patente N°2: 
Low-Cost Air Quality Measurement System Based on Electrochemical and PM Sensors with Cloud Connection

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Captura%20de%20pantalla%202024-04-16%20212902.png)

La patente presenta un dispositivo portátil para la medición de la calidad del aire exterior que utiliza sensores electroquímicos y de material particulado (PM) con conexión a la nube. El prototipo diseñado recopila datos de concentración de los principales contaminantes atmosféricos, como NO2, NO, CO, O3, PM2.5 y PM10, así como de factores ambientales como temperatura, humedad, ubicación y fecha. Este sistema de bajo costo incorpora tecnología IoT que se conecta a Internet a través de un módulo GSM y envía todos los datos en tiempo real a una plataforma en la nube con capacidad de almacenamiento y procesamiento. Dos dispositivos idénticos fueron fabricados e instalados en una unidad móvil de referencia y desplegados en Badajoz, España. Los resultados de una campaña de campo de dos meses se presentan y publican, demostrando un buen rendimiento en la medición de contaminantes gaseosos y partículas PM mediante técnicas de regresión lineal y redes neuronales. 

El sistema incluye un diseño cuidadoso de la electrónica para reducir el ruido eléctrico y aumentar la precisión de las mediciones, con una operación general que implica la recopilación de datos por parte de un microcontrolador, el envío de estos datos al servidor NanoSen-AQM a través de un módulo GSM o Ethernet utilizando el protocolo de comunicación MQTT, almacenamiento de datos en una tarjeta SD y la posibilidad de verificación del funcionamiento mediante comunicación Bluetooth.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen_2024-04-16_215220941.png)

Patente N°3: 
Protótipo de medidor de gases poluentes usando tecnologia de baixo custo

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Captura%20de%20pantalla%202024-04-16%20215327.png)

El prototipo consiste en un dispositivo que utiliza la plataforma Arduino, sensores eletroquímicos (MQ-7 y MQ-135) y un display OLED para medir la concentración de los gases CO y CO2, así como la temperatura y humedad del entorno. La información recopilada por los sensores se procesa a través de la plataforma Arduino y se muestra en el display OLED con indicadores de calidad del aire en colores verde, amarillo y rojo, representando niveles de concentración buenos, malos o peligrosos respectivamente.
Durante pruebas realizadas en ambientes abiertos y cerrados, se observó que la concentración de CO2 aumenta con la presencia de más personas en el lugar, mientras que la concentración de CO se incrementa cerca de fuentes emisoras como vehículos. Los resultados de las mediciones realizadas con el prototipo fueron comparados con los valores obtenidos por medidores comerciales, demostrando coherencia y precisión en las mediciones.

Este prototipo se destaca por su bajo costo en comparación con los equipos comerciales disponibles en el mercado, permitiendo medir la concentración de dos gases distintos de manera efectiva y accesible. Su diseño y funcionalidad lo hacen ideal para alertar a personas no especializadas sobre los niveles de concentración de gases en su entorno, contribuyendo así a la concienciación sobre la calidad del aire y la salud pública.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen_2024-04-16_215415869.png)


## 3.LISTA DE REQUERIMIENTOS FUNCIONALES 

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/FUNCIONALES.png)


## 4.LISTA DE REQUERIMIENTOS NO FUNCIONALES
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/2.png)

## 5.DEFINICIÓN DE SOLUCIÓN A IMPLEMENTAR


## 6.BIBLIOGRAFÍA

1. Arroyo, P., Gómez-Suárez, J., Suárez, J. I., & Lozano, J. (2021). Low-Cost Air Quality Measurement System Based on Electrochemical and PM Sensors with Cloud Connection. Sensors, 21(18), 6228. https://doi.org/10.3390/s21186228

2. Stefan, I. A., Ferreira, P., & Sousa, A. S. (2020). Protótipo de medidor de gases poluentes usando tecnologia de baixo custo. Principia/Revista Principia, 1(49), 31. https://doi.org/10.18265/1517-03062015v1n49p31-42
