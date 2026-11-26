# FlexControl — Grupo 27

## Información del trabajo

- **Institución del grupo:** IFTS 29
- **Trabajo práctico:** TP3 — Construcción 100% agéntica
- **Startup destinataria:** FlexControl, startup de logística y distribución
- **Bloque asignado:** Identificación del paquete
- **Entrega:** 26/11/2026

La landing presenta la startup, las dos sentencias asignadas, una propuesta por sentencia, sus diagramas y los detalles de cada recorrido. Las propuestas describen agentes futuros: no implementan automatizaciones reales ni se conectan a servicios externos.

## Grupo e integrantes

| Integrante | Aporte concreto |
|---|---|
| Rocío Camila Palagano | Coordinación, organización y desarrollo de las propuestas. |
| Candela Daubler | Análisis de las sentencias y revisión de la lógica de los diagramas. |
| Dante Pufahl | Revisión del diseño, contenido y funcionamiento de la landing. |
| David Ramon Thomen | Documentación, pruebas y publicación del proyecto. |

## Identidad opcional del Grupo 27

El grupo se presenta como equipo que diseña propuestas agénticas para procesos de logística y distribución, con una identidad gráfica propia.

## Startup y servicio

**FlexControl** ofrece control de paquetes y coordinación de retiros mediante lectura de etiquetas y avisos al transportista. La propuesta aborda la identificación del pedido correcto y la detección de inconsistencias en sus registros.

El logo de FlexControl incluido en la landing es el recurso recibido para la startup. Se distingue de la identidad del Grupo 27.

## Sentencias, análisis y propuestas

Se conserva la redacción de las dos sentencias asignadas.

### R1 — Identificación de un pedido

**Sentencia original:** “Si una etiqueta escaneada corresponde a un único pedido registrado, el sistema muestra ese pedido y el estado de preparación del paquete.”

**Ficha:** Datos necesarios: código escaneado, pedidos registrados y estado de preparación. **Condición:** la etiqueta corresponde a exactamente un pedido. **Consecuencia:** mostrar ese pedido y el estado del paquete.

**Propuesta — Consulta del pedido por etiqueta.** Un futuro agente consultaría el registro con el código escaneado y mostraría el pedido y su estado si encuentra una coincidencia única. Esto agilizaría las consultas; para ese caso no requiere aprobación humana.

**Caso no definido por R1:** si hay cero o varias coincidencias, la sentencia no indica una acción. El grupo propone pedir revisión humana y no cambiar estados; es una decisión de diseño, no una consecuencia lógica de R1.

### R2 — Revisión de etiquetas problemáticas

**Sentencia original:** “Si la etiqueta no se reconoce o corresponde a más de un registro, el sistema solicita revisión humana y no modifica el estado de ningún pedido.”

**Ficha:** Datos necesarios: código escaneado y registros para determinar reconocimiento y cantidad de coincidencias. **Condición:** la etiqueta no se reconoce **o** corresponde a más de un registro. **Consecuencia:** solicitar revisión humana y no modificar el estado de ningún pedido.

**Propuesta — Detección segura de inconsistencias.** Un futuro agente comprobaría el código contra los registros y pediría intervención humana cuando no lo reconozca o encuentre varias coincidencias. Esto permite revisar los casos problemáticos sin alterar estados.

**Caso no definido por R2:** cuando la condición no se cumple, la sentencia no establece una acción. El grupo propone finalizar sin accionar ni modificar estados; esta decisión se mantiene dentro del flujo R2 y no lo conecta con R1.

En ambas propuestas se describe la consulta de una base de datos o registro de pedidos; no se implementa ni se conecta ninguna herramienta real. Los recorridos y casos de prueba están representados también en la landing.

## Cómo probar la página

1. Abrir `index.html` en una computadora y comprobar que el logo se vea completo.
2. Abrir y cerrar los desplegables con clic y con teclado (Tab y Enter o Espacio).
3. Para R1, probar una etiqueta con una coincidencia y otra con cero o varias.
4. Para R2, probar una etiqueta no reconocida, una con varias coincidencias y una que no active la condición.
5. Confirmar que la intervención humana y la regla de no cambiar estados aparezcan en el caso definido por R2.

Los casos son ejemplos de recorrido; la página no consulta datos reales ni ejecuta las propuestas.

## Tecnologías

- HTML, CSS y JavaScript para la landing y los desplegables accesibles.
- SVG para los diagramas.
- Git y GitHub para control de versiones y alojamiento del repositorio.

## Herramientas de inteligencia artificial

| Aplicación / entorno | Modelo | Uso y cambios solicitados |
|---|---|---|
| Cursor | Modelo no informado | Asistencia en la estructura, el contenido y la revisión de la landing. |
| Codex | GPT-6 | Revisión del README. Cambios solicitados: documentar con comentarios el codigo, quitar Antigravity y OpenCode de la tabla, indicar el modelo de Copilot y registrar las mejoras propuestas para los flujos. |
| VS Code con asistente de programación Copilot SDK | GPT-6.2 Astra | Asistencia para completar el contenido de la landing, representar los dos recorridos con sus alternativas, poblar los detalles desplegables, diseñar la identidad gráfica opcional del Grupo 27 y alinear el README con la consigna. |

Las aplicaciones con “modelo no informado” son aquellas cuyo modelo no pudo confirmarse.

## Enlaces

- **Repositorio:** [RPalagano/TP3-FlexControl-Grupo27](https://github.com/RPalagano/TP3-FlexControl-Grupo27)
- **Landing publicada:** [https://flexcontrol-grupo27.vercel.app](https://flexcontrol-grupo27.vercel.app)
