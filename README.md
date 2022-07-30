# portfolioFrontEnd
Portfolio FrontEnd ArgentinaPrograma

-LOGIN
user: kevin@matsuda.com
password:123456
URL base de datos
https://github.com/devQuebin/BaseDeDatosArgProgMatsuda
Contiene DER y script

Proyecto generado con ANGULAR CLI. y BOOSTRAP5.
Landing Single page application.
El proyecto intenta englobar algunos o varios conocimientos aprendidos en el curso.
-LOGIN con JWT.
-Organizado por componentes padres e hijos.
-Peticiones HTTP GET PUT POST DELETE {CRUD} - Consumo de API
-Aplicación Responsive.

El proyecto consta de 10 componentes
-Navbar: Contiene los accesos directos a las partes de la aplicación e información de contacto hardcoreados y el boton de login/Logout, el cual se alterna con ngIf dependiendo del estado.
-Encabezado: Contiene la información del contacto, nombre apellido y titulo.
-Perfil: Breve descripcion, editable. Tiene un boton de edicion, el cual abre un modal. Este boton es visible unicamente al estar logeado.
-Educacion Listado en tarjetas de la informacion de las educaciones. Contienen foto, nombre de institución, descripcion y boton de edicion y eliminar, asu vez tambien un boton de añadir nueva educacion (CRUD Completo),al estar logeado. Cuentan con comportamiento DRAG AND DROP.
-Experiencia: Expresado de la misma manera que educacion, contiene botones de edicion eliminacion o añadir y drag and drop unicamente al estar logeado.
-Skills: Expresado con Circle progress, instalado por npm. expresa en porcentaje las habilidades duras y blandas.
-Proyecto: Ordenado con tarjetas en grilla, a diferencia de educacion y experiencia, que estaban ordenados verticalmente.
-Footer: Cierre de la app, contiene un boton q redirecciona al inicio de la app.
-Login: Formulario de login, contiene ademas una breve descripcion del proyecto.
-Home: componente que engloba todos los componentes. Este componente esta utilizado principalmente para implementar routeo en la aplicacion, entre el login, y el home propiamente dicho.


DISCLAIMER: el proyecto esta armado en marco de un curso educativo, por lo que tiene mucho margen de mejora. Toda sugerencia y critica constructiva son bienvenidas.

A MEJORAR
luego de la entrega del portoflio, se busca mejorar los siguientes campos:
Poder de creacion de nuevos usuarios.
Navegacion entre distintos usuarios.
Mejorar estilos generales de la app y tener una identidad propia.
Hacer un testeo con usuarios finales para indagar sobre el UX y el UI.
Optimizar recursos, posiblemente centralizar los modales en un solo componente y este ser utilizado por otros componentes.



