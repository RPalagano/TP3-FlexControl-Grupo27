# FlexControl – Grupo 27

## 1. Información del proyecto

**Institución:** IFTS 29  
**Trabajo práctico:** TP3 – Construcción 100% agéntica  
**Grupo:** 27  
**Startup asignada:** FlexControl  
**Institución de origen de la startup:** IFTS   
**Bloque asignado:** Identificación del paquete  

## 2. Integrantes del grupo

| Integrante | Aporte al proyecto |
|---|---|
| Rocío Camila Palagano | Coordinación, organización y desarrollo de las propuestas. |
| [Nombre y apellido 2] | Análisis de las sentencias y revisión de la lógica de los diagramas. |
| [Nombre y apellido 3] | Revisión del diseño, contenido y funcionamiento de la landing. |
| [Nombre y apellido 4] | Documentación, pruebas y publicación del proyecto. |

*Los aportes deberán ajustarse a las tareas efectivamente realizadas por cada integrante.*

## 3. Startup asignada

**Nombre:** FlexControl  
**Rubro:** Logística y distribución.

**Objetivo:** Control de paquetes y coordinación de retiros mediante lectura de etiquetas y avisos al transportista.

FlexControl busca facilitar la identificación de paquetes y la consulta de pedidos mediante el escaneo de etiquetas, permitiendo conocer el estado de preparación y detectar posibles inconsistencias en los registros.

## 4. Sentencias asignadas

### R1 – Fase 1

**Sentencia original:**

"Si una etiqueta escaneada corresponde a un único pedido registrado, el sistema muestra ese pedido y el estado de preparación del paquete."

**Interpretación:**

El sistema recibe una etiqueta escaneada y consulta los pedidos registrados. Cuando encuentra una única coincidencia, muestra la información del pedido y su estado de preparación.

### R2 – Fase 2

**Sentencia original:**

"Si la etiqueta no se reconoce o corresponde a más de un registro, el sistema solicita revisión humana y no modifica el estado de ningún pedido."

**Interpretación:**

El sistema detecta etiquetas que no tienen coincidencias o que presentan más de un registro asociado. En esos casos solicita la intervención de una persona y evita modificar el estado de los pedidos.

## 5. Propuestas de automatización

### Propuesta 1: Identificación automática de pedidos

Se propone un agente que reciba el código de una etiqueta escaneada y consulte la base de datos de pedidos.

Si encuentra exactamente un pedido asociado, mostrará sus datos y el estado de preparación del paquete.

**Herramienta consultada:** Base de datos de pedidos.

**Resultado esperado:** Identificación del pedido y visualización de su estado.

### Propuesta 2: Detección de etiquetas problemáticas

Se propone un agente que analice las etiquetas escaneadas y detecte aquellas que no se reconocen o que corresponden a más de un registro.

Ante estas situaciones, solicitará una revisión humana y evitará cualquier modificación del estado de los pedidos.

**Herramienta consultada:** Base de datos de pedidos.

**Intervención humana:** Revisión de las etiquetas problemáticas.

**Resultado esperado:** Detección de inconsistencias y prevención de modificaciones incorrectas.

## 6. Tecnologías utilizadas

- HTML: estructura de la página.
- CSS: diseño y estilos visuales.
- JavaScript: interacciones y desplegables.
- SVG: representación gráfica de los diagramas de flujo.
- Git y GitHub: control de versiones y alojamiento del repositorio.

## 7. Herramientas de inteligencia artificial

### Aplicación utilizada

**Cursor:** entorno de desarrollo utilizado para construir y modificar los archivos del proyecto mediante instrucciones en lenguaje natural.

### Modelo utilizado

**Grok 4.7:** modelo que figura seleccionado en Cursor durante el inicio del trabajo. Se deberá verificar y registrar si se mantiene durante todo el desarrollo.

### Uso de la inteligencia artificial

Se utiliza el agente de programación para:

- Proponer la estructura inicial de archivos.
- Organizar las secciones de la landing.
- Generar los archivos HTML, CSS y JavaScript.
- Construir los diagramas de flujo.
- Incorporar los desplegables interactivos.
- Realizar ajustes visuales y correcciones a partir de las revisiones del grupo.

### Instrucciones y modificaciones solicitadas

Durante el desarrollo se solicitaron, entre otras, las siguientes tareas:

1. Proponer una estructura inicial para el proyecto.
2. Adaptar la estructura a los requisitos específicos del TP3.
3. Organizar visualmente las dos propuestas de automatización.
4. Preparar los diagramas de flujo correspondientes a R1 y R2.
5. Respetar las sentencias originales y utilizar el logo original de FlexControl.

*Se completará este registro con las instrucciones y modificaciones efectivamente realizadas.*

## 8. Enlaces del proyecto

**Repositorio GitHub:** [Pendiente de publicación]

**Landing publicada:** [Pendiente de publicación]

## 9. Alcance del proyecto

El proyecto consiste en una propuesta visual y explicativa de dos soluciones de automatización para FlexControl.

La landing permite comprender el funcionamiento de cada propuesta mediante sentencias originales, explicaciones y diagramas de flujo.

No se implementan agentes reales, conexiones a APIs, backend ni automatizaciones funcionales. La inteligencia artificial se utiliza exclusivamente como herramienta para la construcción de la página web.
