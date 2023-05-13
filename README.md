# :computer: Backend de mi portfolio | Argentina programa
:small_orange_diamond:Bienvenidos al repositorio de mi frontend para el trabajo final integrador de #YoProgramo del curso de Argentina Programa.

:small_orange_diamond:Link para acceder al repositorio de mi [Backend](https://github.com/BreiNus/CrudBackendArgentinaPrograma)

:heavy_exclamation_mark:NOTA 1: Lo que veran a continuacion esta visto con FireBase, Render y Clever-cloud funcionando, pero es posible que Render o Clever-cloud prensenten errores debido a que el plan de hosting es gratuito, para encontrar soluciones provisorias ingrese al repositorio de mi [backend](https://github.com/BreiNus/CrudBackendArgentinaPrograma) y siga las instrucciones.

:heavy_exclamation_mark:NOTA 2: Lo mas probable es que Render falle, asique las URL utilizadas en mis servicios (ubicadas en `\src\environments\environment.development.ts`) las deje por default apuntando al backend levantado localmente [(como se puede observar aqui)](https://gyazo.com/1488fa19be6a49dcaad1fa4ab576ff55), entonces para que apunten a el backend levantado en Render, hay que reemplazar `http://localhost:8080` por `https://mi-portfolio-web.onrender.com`

## :mag_right:Detalles del Frontend:
### :lock: Iniciar Sesion o Registrarse:
:small_orange_diamond: Lo primero que veras al ingresar a mi porfolio es el Registro o el Login:

:key: En el Registro: Al crear una cuenta seras redirigido al login

![CrearCuenta](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/8f4e6a4c-6a78-40c7-bdbb-984853d33e72)


:lock: En el Login: Al iniciar sesion seras redirigido al home

![loginUser](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/4dfe5d3f-6ec7-4f55-bc75-e8bfb73adbe9)


## :unlock: Pagina principal:
:mag: La pagina cuenta con una barra de navegacion para acceder a todas sus partes, mas un boton para el LogOut y links a mis redes:

![muestraNavBar](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/05adbd7e-24fa-466e-a9fd-30e8fc9472f6)


:page_with_curl: Si la cuenta con la cual ingresaste tiene permisos de admin, los botones para el CRUD estaran visibles:

![inicioAdmin](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/c4389e8e-7be2-4337-be6d-3fe83b0f7ff2)


:page_with_curl: Si la cuenta con la cual ingresaste tiene permisos de user, los botones para el CRUD estaran ocultos:

![inicioUser](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/8a4964b8-521b-4e5b-8920-c27cbc6f6745)

### :clipboard: Sistema CRUD:
:small_orange_diamond: Si la cuenta tiene permisos de admin podras realizar el CRUD como se muestra a continuacion:

![CRUD](https://github.com/BreiNus/programa-2022-frontendAngular/assets/113384178/a391baf5-19de-4ab9-8779-62236a4e7e7f)

## :bulb: Instalacion:
:small_blue_diamond:Clonar el repositorio desde GIT o descargar el archivo ZIP: `git clone https://github.com/BreiNus/programa-2022-frontendAngular.git`

:small_blue_diamond:Generar la carpeta modules: `npm install`

:small_blue_diamond:Compilar y montar el proyecto: `ng serve`

:small_blue_diamond:Tener corriendo el backend

:small_blue_diamond:Si el frontend esta corriendo localmente ingresar a: `http://localhost:4200/`

:small_blue_diamond:Si el frontend esta corriendo en FireBase ingresar a: `https://mi-portfolio-web-6e5bd.web.app` o `https://mi-portfolio-web-6e5bd.firebaseapp.com`
