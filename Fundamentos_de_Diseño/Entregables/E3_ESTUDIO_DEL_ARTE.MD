# ESTADO DEL ARTE

## 1.CONTEXTO CIENTÍFICO

### - Artículo 1:

### On the Use of Low Cost Sensors for the Implementation of a Real-Time Air Pollution Monitoring System Using Wireless Sensor Networks
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/intro%20articulo1.png)

**Figura 1: Portada del artículo 1** 

El artículo presenta un sistema de monitoreo ambiental de bajo costo, fundamentado en redes de sensores inalámbricos (WSN), desarrollado bajo el concepto de Internet de las cosas (IoT). Se creó una aplicación web para visualizar en tiempo real los datos recolectados por los sensores, así como mediciones históricas. La estructura propuesta evita la pérdida de datos en ausencia de conexión a Internet, almacenándolos localmente en nodos de procesamiento. Este sistema fue escalable, permitiendoles aumentar el número de sensores para monitorear áreas más extensas. Se emplearon sensores analógicos y digitales de bajo costo junto con nodos de hardware basados en Arduino para medir gases nocivos y partículas de polvo. Las pruebas iniciales confirmaron el funcionamiento adecuado del sistema y la precisión de los sensores utilizados. Se realizaron mediciones ambientales en un campus universitario en Cumbaya, tanto dentro como fuera de un estacionamiento subterráneo, demostrando que los valores de los gases estaban dentro del rango detectable por los sensores económicos. Aunque estos sensores tuvieron limitaciones en su alcance, aún se pudo detectar situaciones anómalas cuando las concentraciones de gas excedieron ciertos límites. 


### - Artículo 2:

### Sensores de bajo costo en la caracterización de partículas finas (PM2.5) de una ciudad altoandina( Low-cost sensors for fine particulate matter (PM2.5) characterization in a high Andean city ) 
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/2_art%C3%ADculo_imagen_portada.png.png)

**Figura 2: Portada del artículo 2** 


El artículo describe un estudio realizado en Huancayo , que enfrenta problemas de contaminación atmosférica, particularmente con material particulado fino (PM2.5). Debido a los altos costos de infraestructura y equipos de monitoreo convencionales, se emplearon sensores de bajo costo para evaluar la variación temporal y las fuentes de PM2.5 en tres sitios de la ciudad. . Se emplearon sensores PurpleAir PA-II modelo PMS5003 desde agosto de 2018 hasta junio de 2019. Los datos recopilados se analizaron estadísticamente para examinar cambios temporales y se utilizaron retrotrayectorias a través del modelo HYSPLIT para identificar las fuentes de emisión. Las mediciones se realizaron en tiempo real durante campañas simultáneas en los tres sitios, utilizando sensores Plantower modelo PMS5003 de PurpleAir, con una frecuencia de registro de datos por minuto. Estos sensores utilizan rayos láser que inciden sobre las partículas de diferentes tamaños que entran en el dispositivo. La luz reflejada por estas partículas es detectada por diodos receptores. Posteriormente, las señales recibidas son sometidas a filtrado y amplificación a través de filtros y circuitos electrónicos. Finalmente, mediante algoritmos complejos, estas señales son convertidas en concentraciones de PM2.5, proporcionando así mediciones precisas de la contaminación atmosférica (Zheng et al., 2018).

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/modelo%20PMS5003.png)



**Modelo PMS5003 de la plataforma colaborativa de PurpleAir (SCAQMD)** 


### - Artículo 3:

### Low Cost Sensor with IoT LoRaWAN Connectivity and Machine Learning Based Calibration for Air Pollution Monitoring

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/3_articulo_imagen_portada.png)



**Figura 3: Portada del artículo 3** 

El artículo se centra en el desarrollo y poder implementar un sensor de bajo costo para monitorear o controlar la contaminación del aire. Este sensor se caracteriza por su capacidad para conectarse a Internet de las Cosas (IoT) mediante la tecnología LoRaWAN, una red de área extensa de baja potencia, lo que facilita la recopilación y transmisión de datos durante el monitoreo del estado del aire de manera eficiente y económica. Este nodo sensor usa sensores electroquímicos para así poder lograr medir concentraciones de monóxido de carbono (CO) y dióxido de nitrógeno (NO2) y un sensor infrarrojo para medir niveles de partículas (PM).

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen2_articulo3.png)
                                 


También se utiliza técnicas de aprendizaje automático como la Regresión de Mínimos Cuadrados Ordinarios (OLS) para ajustar los valores básicos del sensor, minimizando las diferencias entre las lecturas del sensor y los valores de referencia. Luego, tenemos a la Regresión Lineal Múltiple (MLR) que ajusta una combinación de mediciones de contaminantes, temperatura y humedad para alinearlas mejor con las concentraciones de referencia, corrigiendo la respuesta del sensor según las condiciones ambientales.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Regresion_lineal_multiple_formula.png)


**Figura 4: Fórmula de Regresión Lineal Múltiple (MLR)** 


En la ecuación mostrada:

1. β0: Término de intercepción o constante.
2. βi: Coeficientes de los predictores.
3. Xi: Variables predictoras o independientes.
4. Y: Variable dependiente o resultado.


Adicionalmente, se implementan Redes Neuronales Artificiales (ANN), específicamente el Perceptrón Multicapa (MLP), que utiliza las respuestas del sensor y datos ambientales como entradas, y los datos de referencia como salida. 
Estas técnicas permiten ajustar y calibrar los sensores a las variaciones ambientales y a las características específicas de los contaminantes, lo que resulta en mediciones más precisas.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Imagen_redes_neuronales_artificiales_fomula.png)


En las segundas ecuaciones mostradas:

Primera ecuación (capa oculta):

1. wij: Peso de la conexión entre la entrada i y la neurona j en la capa oculta.
2. Xi: Entrada i.
3. bj^H: Sesgo de la neurona j en la capa oculta.
4. ϕH: Función de activación de la capa oculta.
5. Oj: Salida de la neurona j en la capa oculta.

Segunda ecuación (capa de salida):

1. wj: Peso de la conexión entre la neurona j de la capa oculta y la neurona de salida.
2. Oj: Salida de la neurona j en la capa oculta.
3. b^O: Sesgo de la neurona en la capa de salida.
4. ϕO: Función de activación de la capa de salida.
5. Y: Salida final de la red neuronal.

### - Artículo 4: 
### Evaluación del ruido ambiental utilizando telefonos inteligentes
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/portada%20art%C3%ADculo%204.png)


**Figura 4: Portada del artículo 4** 

Este artículo, se propone aprovechar los teléfonos inteligentes como unidades de detección de ruido ambiental. Se centra en el proceso de captura y procesamiento de sonido, evaluando la precisión de diferentes algoritmos de cálculo del ruido en comparación con dispositivos de medición profesionales. Los resultados experimentales indican que, con una calibración adecuada, es posible medir los niveles de ruido con precisión comparable a la de dispositivos profesionales en el rango de 35-95 dB, cubierto por los micrófonos incorporados en los teléfonos inteligentes.

Los resultados experimentales muestran que la selección adecuada de la tasa de muestreo y el tamaño de búfer puede tener un impacto significativo en la exactitud de las estimaciones del nivel de ruido, con errores de estimación que varían entre 1% y 12% en el mejor de los casos. Sin embargo, se considera que errores entre 1-2 dB son aceptables para la mayoría de los escenarios de medición de ruido. Se planea validar los algoritmos propuestos en otros dispositivos y desarrollar una aplicación distribuida de crowdsensing para mediciones de ruido a mayor escala en el futuro.


## 2.CONTEXTO COMERCIAL

## EQUIPOS Y DISPOSITIVOS EXISTENTES EN EL MERCADO

### - Medidor de calidad de aire dióxido de carbono, monóxido, oxígeno, humedad y temperatura AQ-9901SD 

Este medidor ambiental multifunción destaca por su capacidad para medir seis parámetros clave relacionados con la calidad del aire: CO², CO, O2, temperatura, humedad y punto de rocío. Ofrece lecturas simultáneas de dos parámetros en su pantalla y asegura una alta precisión en las mediciones. Sus características adicionales incluyen alarmas ajustables, modo de registro de máximos y mínimos, y la posibilidad de conectarse a un ordenador para transferir datos. Es fácil de usar y cuenta con una memoria interna a través de una tarjeta SD extraíble. Recomendado para una amplia variedad de aplicaciones, desde sistemas de aire acondicionado hasta espacios interiores públicos, oficinas y más. Viene con accesorios como una tarjeta de memoria SD de 2GB, baterías, maletín de transporte y varias sondas para diferentes parámetros. Además, ofrece opciones adicionales como software y cable USB, así como un adaptador de corriente opcional.


![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Medidor%20de%20calidad%20de%20aire%20di%C3%B3xido%20de%20carbono%2C%20mon%C3%B3xido%2C%20ox%C3%ADgeno%2C%20humedad%20y%20temperatura%20AQ-9901SD.png)

### - Medidor ambiental Digi-Sense; Medidor de velocidad, humedad, temperatura y luz del viento 

El medidor ambiental Digi-Sense proporciona una funcionalidad versátil al medir velocidad del viento, humedad, temperatura y luz, todo en un solo dispositivo. Con la capacidad de cambiar entre grados Fahrenheit y Celsius, así como la lectura de valores mínimos y máximos en cualquier intervalo de tiempo, ofrece una experiencia de usuario conveniente. Su diseño compacto integra un anemómetro, higrómetro, fotómetro y termómetro, con la opción de utilizar sondas externas para mediciones internas y externas, compatible con termopares tipo K. Con lecturas precisas en varias unidades para el anemómetro y una amplia gama de humedad relativa para el higrómetro, junto con la capacidad de medir la intensidad de luz en lux o velas de pie con el fotómetro, este dispositivo es una herramienta completa para diversas aplicaciones. La función HOLD permite congelar lecturas y visualizar valores mínimos y máximos en cualquier modo de medición, facilitando aún más su uso.


![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Medidor%20ambiental%20Digi-Sense%3B%20Medidor%20de%20velocidad%2C%20humedad%2C%20temperatura%20y%20luz%20del%20viento.png)




### ** - Analizador para metales pesados PMMS-5000**

El PMMS-5000 incorpora tecnología avanzada de pruebas no destructivas XRF y un sistema automatizado de enriquecimiento atmosférico para una precisa medición de metales pesados como plomo, mercurio, cadmio, cromo, y arsénico, entre otros, conforme al estándar US EPA IO - 3.3. Destacando su versatilidad, se emplea extensamente en la supervisión de la calidad del aire en zonas industriales, residenciales y urbanas. Sus características sobresalientes incluyen la capacidad de detectar hasta 28 tipos de metales pesados con una alta sensibilidad (límite de detección en ng/m3), calibración anticipada, ajuste automático de cero, y diagnóstico automático de fallos para minimizar los requerimientos de mantenimiento. Además, ofrece la opción de incorporar una cortadora TSP, PM10, o PM2.5. Utiliza una fuente de rayos X de baja energía y dispone de múltiples puertos de entrada/salida como RS232/485, USB, GPRS, y Ethernet. Sus aplicaciones principales abarcan el monitoreo y análisis de la calidad del aire, el estudio de partículas atmosféricas, análisis de historial ambiental, evaluación de impacto ambiental, identificación de fuentes de contaminación, y pronóstico de alertas de contaminación.


![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/Analizador%20para%20metales%20pesados%20PMMS-5000.png)



## PATENTES
## - **Patente N°1:**

Red de sensores para monitoreo de la calidad del aire ambiente 

**Número de publicación:** WO/2023/042222

**Fecha de Publicación:** 23.03.2023

**CIP:** H04W 4/38 (2018.1) G01N 33/00 (2006.1)

La patente WO2023042222 describe un sistema avanzado de monitoreo de la calidad del aire ambiental a través una red de sensores inalámbricos de bajo costo, denominada SENSurAIR. Este sistema se enfoca en mejorar la precisión y validación de los datos del estado del aire en tiempo real, utilizando una técnica de calibración adaptativa en campo. A su vez, se encuentra en la capacidad para proporcionar monitoreo en tiempo real con alta resolución espacial y temporal de contaminantes como NO, SO, O3, CO, PM2.5 y PM10, superando las limitaciones de otros sistemas de monitoreo existentes que presentan poca precisión en la reportación de datos y no tienen suficientes mediciones para hacer mapas detallados de contaminación. La red SENSurAIR permite la recopilación eficiente de datos a través de una plataforma inalámbrica basada en GSM/Wi-Fi, facilitando la subida de datos a servidores seguros para su análisis y previsión. La calibración en campo de los sensores asegura la fiabilidad y exactitud de los datos, y así poder formular medidas de control y emisiones de avisos de salud basados en el Índice de Calidad del Aire (AQI). Este sistema de sensores inalámbricos ofrece una solución escalable y de costo económico para la vigilancia del estado del aire en tiempo real.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/imagen_de_patente1.PNG)

En la imagen de la patente 1 observamos un mapa de cómo funciona en general, tenemos a los contaminante que serán recibidos por los sensores, donde las salidas analógicas del sensor son convertidas en salidas digitáles y luego pasan al microcontrolador donde se procesaran la información, para luego pasar al módulo GSM que servirá para transmitir los datos a la nube, a través de la nueva es donde se enviara la información hacia los móviles y páginas web para que se pueda visualizar la información.


## - **Patente N°2:** 

Monitor de aire inteligente para detectar contaminantes emitidos por vehiculos mediante el internet de las cosas (IOT)

**Número de publicación:** 202021000550

**Fecha de publicación:** 09.07.2021

**CIP:** H04L H04N G06Q H04W G06F

La presente invención describe un sistema o método para un monitor de aire inteligente que detecta contaminantes emitidos por vehículos en un área específica utilizando Internet de las Cosas (IoT). El problema de la contaminación ambiental, especialmente agudo en áreas urbanas debido a emisiones de vehículos y otras fuentes, requiere una medición precisa y constante de los niveles de contaminantes para garantizar el cumplimiento de estándares gubernamentales. Actualmente, los sistemas de detección de contaminación enfrentan desafíos como entornos difíciles, niveles de nitrógeno y oxígeno, y exposición al vapor de agua, lo que afecta su confiabilidad. La invención propone un sistema que utiliza sensores y cámaras instalados en áreas específicas para monitorear datos meteorológicos y detectar gases peligrosos. Estos datos se envían a un servidor en la nube a través de un módem Wi-Fi, donde se comparan con registros anteriores para determinar los niveles de contaminantes. La aplicación de IoT permite enviar estos resultados a una pantalla de visualización. Además, el sistema puede enviar alertas o mensajes SMS a dispositivos electrónicos sobre niveles de contaminación, permitiendo tomar medidas adecuadas. El alcance de este monitor de aire inteligente puede ampliarse con más características para mejorar su funcionalidad y efectividad en el monitoreo y control de la contaminación atmosférica.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/PATENTE2.png)

## - **Patente N°3:** 

Sistema de vigilancia de la contaminación atmosférica mediante el internet de los vehículos y sensores de contaminación

**Número de publicación:** 2021102486

**Fecha de publicación:** 03.06.2021

**CIP:** G01M 15/10 G01N 33/00

El sistema de monitoreo de contaminación del aire utilizando Internet de Vehículos y sensores de contaminación es un prototipo diseñado para mejorar la calidad del aire en entornos urbanos. Este sistema consta de módulos de sensores, comunicación inalámbrica con la nube y un módulo de procesamiento con base de datos. Su objetivo principal es monitorear los contaminantes del aire y generar alertas avanzadas al predecir los niveles de contaminación en la ciudad. Utiliza sensores de gases para detectar las emisiones de los vehículos que afectan las áreas urbanas. El sistema ha demostrado una precisión del 99.23% en la generación de alertas, superando el rendimiento de sistemas existentes. La arquitectura del sistema incluye una capa de percepción con sensores de gas en vehículos, una capa de red para garantizar la conectividad y una capa de aplicación para analizar, almacenar y procesar datos, tomando decisiones sobre situaciones de riesgo. La implementación exitosa de este prototipo demuestra su eficacia en la monitorización y alerta temprana de la contaminación del aire en entornos urbanos, lo que contribuye a mejorar la calidad de vida de los habitantes y proteger el medio ambiente.

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/PATENTE3.png)

## 3.LISTA DE REQUERIMIENTOS FUNCIONALES 

![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable3/REQUIRI.%20FUNCIONALES.png)


## 4.LISTA DE REQUERIMIENTOS NO FUNCIONALES
![image](https://github.com/BrunoXIII-Gav/FDD_1/blob/main/Archivos_de_FDD/Imagenes/Imagenes_entregable4/REQUIRIEMIENTOS%20NO%20FUNCIONALES.png)

## 5.DEFINICIÓN DE SOLUCIÓN A IMPLEMENTAR

Desarrollaremos un prototipo donde usaremos sensores de aire y sonoras que midan los contaminantes en el ambiente. Los datos recopilados estarán disponibles en tiempo real a través de una interfaz web. Además, el dispositivo emitirá alertas en caso de exceso de contaminación tanto del aire y del ruido. Este producto no solo está dirigido para los habitantes sino tambien para el gobierno local de Chicla con el objetivo de proporcionar una base de datos sobre la calidad del aire y sonora permitiendo la implementación de medidas ambientales para abordar cualquier problema que pueda afectar a los pobladores.

## 6.BIBLIOGRAFÍA

1. Bachechi, C., Rollo, F., & Po, L. (2024). HypeAIR: A novel framework for real-time low-cost sensor calibration for air quality monitoring in smart cities. Ecological Informatics, 81(102568), 102568. https://doi.org/10.1016/j.ecoinf.2024.102568
2. Ulloa Ninahuamán, J., Alvarez-Tolentino, D. M., Peña Rojas, A., & Suarez-Salas, L. (2022). Sensores de bajo costo en la caracterización de partículas finas (PM2.5) de una ciudad altoandina. Revista de Investigaciones Altoandinas - Journal of High Andean Research, 24(3), 199–207. https://doi.org/10.18271/ria.2022.468
3. Ali, S., Glass, T., Parr, B., Potgieter, J., & Alam, F. (2021). Low cost sensor with IoT LoRaWAN connectivity and machine learning-based calibration for air pollution monitoring. IEEE transactions on instrumentation and measurement, 70, 1–11. https://doi.org/10.1109/tim.2020.3034109
4. WIPO - search international and national patent collections. (2023), SENSOR NETWORK FOR AMBIENT AIR QUALITY MONITORING. https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2023042222&_cid=P12-LV1F2L-16452-1
5. Mr. Bhaskar Vijay Ajgaonkar (2021). SMART AIR MONITOR FOR DETECTING POLLUTANTS EMITTED FROM VEHICLES USING INTERNET OF THINGS (IOT). India: Office of the Controller General of Patents, Designs and Trade Marks. https://n9.cl/njb9ur
6. A. L., Vallikannu, Muthu, T. Sudalai, Rani V., Kanpur (2021). AIR POLLUTION MONITORING SYSTEM USING INTERNET OF VEHICLES AND POLLUTION SENSORS. Australia: IP Australia. https://n9.cl/3oi1d
7. Medidor ambiental Digi-Sense; Medidor de velocidad, humedad, temperatura y luz del viento. Omega Perú S.A. https://omegaperu.com.pe/producto/medidor-ambiental-digi-sense-medidor-de-velocidad-humedad-temperatura-y-luz-del-viento/
8. Medidor de calidad de aire dióxido de carbono, monóxido, oxígeno, humedad y temperatura AQ-9901SD – Valiometro. Valiometro.pe. https://www.valiometro.pe/medidor-de-calidad-de-aire-dioxido-de-carbono-monoxido-oxigeno-humedad-y-temperatura-aq-9901sd/
9. PMMS-5000 - Analizador para metales pesados by Hangzhou Zetian Technology CO., Ltd. Directindustry.es. https://www.directindustry.es/prod/hangzhou-zetian-technology-co-ltd/product-189658-1866530.html
10. Zamora, W., Tavares Calafate, C., & Cano, J.-C. (2017). Evaluación del ruido ambiental utilizando teléfonos inteligentes. En Actas de las Jornadas Sarteco 2017. Málaga, España. Disponible en: [https://www.researchgate.net/publication/371724807_Evaluacion_del_ruido_ambiental_utilizando_telefonos_inteligentes].


## Link de diapositivas:

https://www.canva.com/design/DAGCtygXPmI/II1_3RQjQgv8oEYDhniFMQ/edit
