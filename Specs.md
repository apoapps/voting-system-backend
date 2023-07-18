**Entregable de Backend para Sistema de Votación de Cabildo de Mexicali**

*Nota Importante: A continuación se especifica el progreso actual del proyecto. Se muestran las acciones ya hechas entre parentesis. Todas las demás especificaciones deben ser demostradas en las siguientes juntas para validar su correcto funcionamiento.*

**Acciones y Especificaciones para el Desarrollador Backend:**

1. **Proyecto Inicial (Realizado):**
   - Se ha entregado al Desarrollador Backend un proyecto inicial que incluye las dependencias necesarias para sockets y rutas con ExpressJS.
   - La conexión directa con la base de datos en MongoDB ya está implementada, permitiendo al Desarrollador Backend proporcionar su ruta para la base de datos local.
   - El proyecto inicial sirve como punto de partida para el desarrollo del Backend.

2. **Base de Datos y CRUD:**
   - Implementar una base de datos MongoDB para almacenar información relevante del proyecto, incluyendo datos sobre la presidenta municipal, el secretario, presidente, etc.
   - Desarrollar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para cada entidad en la base de datos, facilitando la gestión completa de la información.
   - Incluir un diagrama de funcionamiento que explique cómo se lleva a cabo el CRUD en la base de datos.

3. **Diagrama de la Base de Datos:**
   - Generar un diagrama que represente la estructura de la base de datos MongoDB, en este caso, los modelos en el lenguaje Javascript, resaltando las colecciones y sus relaciones.

4. **Demostración del CRUD:**
   - Explicar de forma clara y sencilla cómo interactuar con la base de datos para leer, escribir y actualizar datos mediante consultas de MongoDB (En este caso, el como se interactial en tiempo real).
   - Mostrar una demostración del CRUD en el apartado de Generalidades.

5. **Apartado de Generalidades:**
   - Desarrollar la funcionalidad para permitir la lectura y modificación de información relacionada con el apartado de Generalidades en tiempo real desde el backend.
   - Permitir a los usuarios acceder y actualizar datos relacionados con el Ayuntamiento de Mexicali.
   - Proporcionar un diagrama de funcionamiento tanto para el asesor como para el equipo de frontend para facilitar la comprensión.

6. **Apartado de Sesión de Cabildo:**
   - Implementar la lógica para llevar a cabo una sesión de cabildo en tiempo real con todos sus apartados, incluyendo puntos de la sesión, votos, resultados, etc.
   - Conectar el apartado de Sesión de Cabildo con el de Generalidades para obtener información relevante sobre la sesión.
   - Presentar un diagrama de funcionamiento para explicar la lógica y el flujo de datos en la sesión de cabildo.

7. **Diagrama de la Sesión de Cabildo:**
   - Crear un diagrama explicativo que ilustre la lógica y el flujo de datos para el funcionamiento de la sesión de cabildo.

8. **Demostración de la Sesión de Cabildo:**
   - Explicar de manera comprensible cómo funciona la lógica de la sesión de cabildo y cómo se actualizan los datos en tiempo real, para que cualquier miembro del equipo pueda entenderlo.
   - Realizar pruebas exhaustivas de una sesión de cabildo con diferentes escenarios de votación.

9. **Generación de Informe en PDF:**
   - Desarrollar la funcionalidad para generar un informe en formato PDF que contenga todos los detalles relevantes de una sesión de cabildo.
   - Asegurarse de que el informe incluya información sobre los puntos de la sesión, los votos realizados y los resultados obtenidos.
   - Proporcionar un diagrama de funcionamiento para explicar la lógica y el flujo de datos en la generación del informe en PDF.

10. **Documentación y Entrega:**
    - Documentar de manera amena todo el código Backend, agregando comentarios explicativos para facilitar su comprensión por parte de cualquier miembro del equipo.
    - Entregar la documentación, diagramas y el informe en PDF al encargado de Frontend y al equipo para su revisión y seguimiento del proyecto.

**Nota Final:**
El proyecto se encuentra en una etapa inicial con algunas cosas ya realizadas, como la entrega del proyecto base, la implementación de la conexión con la base de datos y las dependencias para sockets y rutas con ExpressJS. Sin embargo, el Desarrollador Backend deberá entregar el correcto funcionamiento y la lógica de todas las especificaciones para la comprensión del proyecto. Se requiere asegurar la claridad y detalle en la explicación de cada punto para que cualquier miembro del equipo pueda entender el funcionamiento del backend y su integración con el frontend. Además, se espera que las demostraciones incluyan el uso de sockets para garantizar la comunicación en tiempo real y que los cambios se reflejen casi instantáneamente en dos dispositivos.
