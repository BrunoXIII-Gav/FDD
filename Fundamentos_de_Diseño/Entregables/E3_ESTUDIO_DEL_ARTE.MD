# ESTADO DEL ARTE

## 1.CONTEXTO CIENTÍFICO

### Artículo 1:

### HypeAIR: A novel framework for real-time low-cost sensor calibration for air quality monitoring in smart cities

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/1_art%C3%ADculo_imagen_portada.png.png)

Este artículo describe el desarrollo de HypeAIR, un marco innovador de código abierto que simplifica y automatiza la calibración de sensores de calidad del aire de bajo costo (LCAQ). Se basa en la co-ubicación, lo que significa que coloca varios sensores en la misma ubicación para comparar y ajustar mediciones automáticamente. Así mismo, es adaptable a diferentes sensores y contaminantes, lo que permite un monitoreo hiperlocal en tiempo real.
HypeAIR integra dos metodologías de calibración: la primera se basa en una combinación de algoritmos de aprendizaje automático VR y SVR (Voting Regressor y Support Vector Regression), que tienen en cuenta la dependencia temporal de las observaciones, mientras que la segunda se basa en el algoritmo de aprendizaje profundo Long Short-Term Memory (LSTM), diseñado para ser flexible y personalizable, lo que permite la incorporación de nuevas metodologías.


### Artículo 2:

### Sensores de bajo costo en la caracterización de partículas finas (PM2.5) de una ciudad altoandina( Low-cost sensors for fine particulate matter (PM2.5) characterization in a high Andean city ) 
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

Monitor de aire inteligente para detectar contaminantes emitidos por vehiculos mediante el internet de las cosas (IOT)

Numero de publicación: 202021000550

Fecha de publicación: 09.07.2021

CIP: H04L H04N G06Q H04W G06F

La presente invención describe un sistema o método para un monitor de aire inteligente que detecta contaminantes emitidos por vehículos en un área específica utilizando Internet de las Cosas (IoT). El problema de la contaminación ambiental, especialmente agudo en áreas urbanas debido a emisiones de vehículos y otras fuentes, requiere una medición precisa y constante de los niveles de contaminantes para garantizar el cumplimiento de estándares gubernamentales. Actualmente, los sistemas de detección de contaminación enfrentan desafíos como entornos difíciles, niveles de nitrógeno y oxígeno, y exposición al vapor de agua, lo que afecta su confiabilidad. La invención propone un sistema que utiliza sensores y cámaras instalados en áreas específicas para monitorear datos meteorológicos y detectar gases peligrosos. Estos datos se envían a un servidor en la nube a través de un módem Wi-Fi, donde se comparan con registros anteriores para determinar los niveles de contaminantes. La aplicación de IoT permite enviar estos resultados a una pantalla de visualización. Además, el sistema puede enviar alertas o mensajes SMS a dispositivos electrónicos sobre niveles de contaminación, permitiendo tomar medidas adecuadas. El alcance de este monitor de aire inteligente puede ampliarse con más características para mejorar su funcionalidad y efectividad en el monitoreo y control de la contaminación atmosférica.

Patente N°3: 

Sistema de vigilancia de la contaminación atmosférica mediante el internet de los vehículos y sensores de contaminación

Numero de publicación: 2021102486

Fecha de publicación: 03.06.2021

CIP: G01M 15/10 G01N 33/00

El sistema de monitoreo de contaminación del aire utilizando Internet de Vehículos y sensores de contaminación es un prototipo diseñado para mejorar la calidad del aire en entornos urbanos. Este sistema consta de módulos de sensores, comunicación inalámbrica con la nube y un módulo de procesamiento con base de datos. Su objetivo principal es monitorear los contaminantes del aire y generar alertas avanzadas al predecir los niveles de contaminación en la ciudad. Utiliza sensores de gases para detectar las emisiones de los vehículos que afectan las áreas urbanas. El sistema ha demostrado una precisión del 99.23% en la generación de alertas, superando el rendimiento de sistemas existentes. La arquitectura del sistema incluye una capa de percepción con sensores de gas en vehículos, una capa de red para garantizar la conectividad y una capa de aplicación para analizar, almacenar y procesar datos, tomando decisiones sobre situaciones de riesgo. La implementación exitosa de este prototipo demuestra su eficacia en la monitorización y alerta temprana de la contaminación del aire en entornos urbanos, lo que contribuye a mejorar la calidad de vida de los habitantes y proteger el medio ambiente.

## 3.LISTA DE REQUERIMIENTOS FUNCIONALES 

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/R.%20FUNCIONALES.png)


## 4.LISTA DE REQUERIMIENTOS NO FUNCIONALES
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/R.%20NO%20FUNCIONALES.png)

## 5.DEFINICIÓN DE SOLUCIÓN A IMPLEMENTAR


## 6.BIBLIOGRAFÍA

1. https://www.sciencedirect.com/science/article/pii/S1574954124001109?pes=vor#s0110
2. http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S2313-29572022000300199
