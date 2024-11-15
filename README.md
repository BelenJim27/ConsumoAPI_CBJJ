## Proyecto: Consumo de API de Usuarios en Angular
Este proyecto es una aplicación en Angular que consume una API pública de usuarios y muestra la información en una tabla con paginación, utilizando Angular Material. 
### Tecnologías y Herramientas
- Angular: Framework principal para el desarrollo de la aplicación.
- Angular Material: Librería para componentes de interfaz de usuario, usada para la tabla y paginación.
- TypeScript: Lenguaje de programación principal de Angular.
- API Pública: https://api.escuelajs.co/api/v1/users
### Características
- Obtiene una lista de usuarios de la API y la muestra en una tabla.
- Paginación de usuarios utilizando el componente MatPaginator de Angular Material.
- Uso de servicios en Angular para organizar el consumo de datos desde la API.
- Estilos personalizados y diseño responsivo con Angular Material.
### Estructura de Archivos
- user.service.ts: Servicio que se encarga de conectarse a la API y obtener los datos de los usuarios.
- user-list.component.ts: Componente que muestra la lista de usuarios en una tabla con paginación.
- user-list.component.html: Plantilla HTML para la tabla de usuarios.
- app.component.ts y app.component.html: Componentes principales de la aplicación.
### Preguntas
- Pregunta: ¿Qué hace el método getUsers en este servicio?

	Su función es enviar una solicitud GET a la API que estamos ocupando para que se pueda obtener la lista de usuarios. y los devuelve en un arreglo.

- Pregunta : ¿Por qué es necesario importar HttpClientModule?

	Porque con este se realizan las solicitudes HTTP en angular, lo que permite inyectar HttpClient en los servicios y componentes generando una comuniccion con API’s externas y asi recibir o enviar datos.

- Pregunta: ¿Qué función cumple el método ngOnInit en el componente UserListComponent?

	Primeramente ngOnInit se utiliza para cualquier solicitud de datos asíncronos a una API para preparar el componente antes de renderizar. Por lo tanto, su función es poder suscribirse al método getUsers del servicio UserService al cargar el componente para obtener los datos de los usuarios y almacenarlos en la variable users para poder mostrarlos.

- Pregunta: ¿Para qué sirve el bucle *ngFor en Angular? Explica cómo se utiliza en este ejemplo. 

-Es una herramienta esencial en angular, utilizada para iterar sobre listas y colecciones de datos, su principal función es renderizar un conjunto de elementos en función de una colección. Y dentro de este ejemplo *ngFor recorre cada usuario en el arreglo users y genera una fila de la tabla con las propiedades id, name, email y role de cada usuario.

### Preguntas de reflexión final:
1. ¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs? Los servicios en Angular centralizan la lógica de negocio y facilitan el consumo de APIs de manera organizada y reutilizable. Permiten separar la obtención de datos de la lógica de presentación en los componentes, promoviendo el mantenimiento y la escalabilidad del código.
2. ¿Por qué es importante separar la lógica de negocio de la lógica de presentación?
Separar la lógica de negocio de la de presentación facilita el mantenimiento del código, mejora la reutilización de componentes, y permite hacer pruebas unitarias más efectivas. Además, esta separación ayuda a mantener el código modular y ordenado, lo que mejora la legibilidad y facilita la colaboración en proyectos.
3. ¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?
 Se podrían integrar APIs de productos, órdenes, comentarios, publicaciones de blog, o cualquier otro tipo de información que permita a la aplicación interactuar con un sistema externo, como APIs de autenticación, geolocalización, clima, redes sociales, o servicios financieros.
