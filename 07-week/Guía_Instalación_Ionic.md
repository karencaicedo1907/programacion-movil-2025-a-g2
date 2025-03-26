# Guía de Instalación y Configuración de Ionic con React

## Introducción
Ionic es un framework que permite el desarrollo de aplicaciones móviles multiplataforma utilizando tecnologías web como **HTML, CSS y JavaScript**. Gracias a su compatibilidad con **React**, es posible crear aplicaciones modernas con una interfaz intuitiva y fluida.

Esta guía explica paso a paso cómo instalar Ionic en tu sistema y configurar un nuevo proyecto basado en React.

---

## Requisitos Previos
Antes de comenzar, asegúrate de que tu sistema cumple con los siguientes requisitos:

- **Node.js** (se recomienda la versión LTS)  
  Para verificar la instalación:
  ```sh
  node -v
  ```
  Si no lo tienes instalado, descárgalo desde [Node.js](https://nodejs.org).

- **npm** (incluido con Node.js)  
  Para comprobar la versión:
  ```sh
  npm -v
  ```

- **Git** (necesario para la gestión de versiones)  
  Para verificar si está instalado:
  ```sh
  git --version
  ```
  Puedes descargarlo desde [Git SCM](https://git-scm.com).

---

## Instalación de Ionic CLI
Para instalar la herramienta de línea de comandos de Ionic de manera global, ejecuta el siguiente comando en tu terminal:

```sh
npm install -g @ionic/cli
```

Una vez finalizada la instalación, verifica que está correctamente instalado con:

```sh
ionic -v
```

Esto te mostrará la versión de Ionic instalada en tu sistema.

---

## Creación de un Proyecto con React
Con Ionic instalado, el siguiente paso es generar un nuevo proyecto basado en React. Para hacerlo, usa el siguiente comando:

```sh
ionic start MiAplicacion blank --type=react
```

Donde:
- **MiAplicacion** es el nombre del proyecto.
- **blank** es una plantilla inicial sin componentes adicionales.
- **--type=react** indica que el proyecto utilizará React.

Durante la configuración, se te pedirá elegir entre **Capacitor** y **Cordova**. Se recomienda seleccionar Capacitor para una mejor integración con Ionic.

---

## Ejecución del Proyecto en el Navegador
Para visualizar la aplicación en tu navegador:

1. Accede a la carpeta del proyecto:
   ```sh
   cd MiAplicacion
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   ionic serve
   ```

Esto abrirá la aplicación en tu navegador en `http://localhost:8100`.

---


## Creación de una Nueva Página
Para agregar una nueva página a tu aplicación Ionic con React, usa el siguiente comando:

```sh
ionic generate page NuevaPagina
```

Esto creará una carpeta dentro de `src/pages/` con los archivos correspondientes a la nueva página.

---

## Compilación para Dispositivos Móviles
Si deseas ejecutar tu aplicación en un dispositivo físico o emulador, primero debes agregar la plataforma deseada:

Para Android:
```sh
ionic cap add android
```

Para iOS:
```sh
ionic cap add ios
```

Luego, abre el proyecto en el entorno de desarrollo correspondiente:

Para Android Studio:
```sh
ionic cap open android
```

Para Xcode (iOS):
```sh
ionic cap open ios
```

Desde el IDE, puedes compilar y ejecutar la aplicación en un dispositivo o emulador.

---

## Conclusión
Siguiendo estos pasos, podrás instalar y configurar Ionic con React de manera efectiva. Esto te permitirá desarrollar aplicaciones móviles utilizando tecnologías web modernas y ejecutarlas en diferentes plataformas de manera sencilla.

