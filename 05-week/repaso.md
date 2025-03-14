# Repaso de Desarrollo Ágil y Herramientas Claves

## 1. Historias de Usuario

### ¿Qué son?
Son explicaciones cortas y simples sobre lo que un usuario necesita hacer en una app o sistema, expresadas desde su punto de vista.

### Características
- Deben ser fáciles de entender.
- Se centran en lo que el usuario gana.
- Suelen escribirse así: **"Como [usuario], quiero [acción] para [beneficio]"**.

### Ejemplo
**"Como admin, quiero filtrar usuarios por rol para manejar permisos más rápido."**

### ¿Por qué son importantes?
- Ayudan a que el equipo y los clientes hablen el mismo idioma.
- Sirven para planear mejoras en el software poco a poco.


## 2. Uso de Tableros (Trello)

### ¿Qué es?
Trello es una app que ayuda a organizar tareas con tableros, listas y tarjetas, haciendo que el trabajo en equipo sea más claro y visual.

### Ventajas
- Permite ver qué tareas están en proceso.
- Facilita el trabajo en grupo.
- Muestra el estado del proyecto de un vistazo.
- Funciona bien con metodologías como Scrum y Kanban.

## 3. ¿Qué es Scrum?

### Explicación
Scrum es un método ágil para trabajar en equipo y hacer proyectos por partes llamadas *sprints*.

### Roles
- **Product Owner:** Organiza y prioriza el trabajo.
- **Scrum Master:** Ayuda a que el equipo trabaje sin problemas.
- **Equipo de Desarrollo:** Se encarga de programar y construir el producto.

### Reuniones Clave
- **Sprint Planning:** Se planea lo que se hará en el sprint.
- **Daily Scrum:** Reunión rápida para ver avances y bloqueos.
- **Sprint Review:** Se muestra lo hecho y se reciben comentarios.
- **Sprint Retrospective:** Se analiza qué mejorar para el siguiente sprint.

### Beneficios
- Permite adaptarse a cambios sin problema.
- Entrega avances constantes.
- Fomenta el trabajo en equipo.

## 4. Comandos Básicos de Git y GitHub

### Comandos Más Usados

#### Clonar un repo

 git clone URL_DEL_REPO

#### Guardar cambios
 git add .
 git commit -m "Descripción del cambio"

#### Subir cambios a GitHub
 git push origin nombre-rama

#### Traer cambios de GitHub
 git pull origin nombre-rama

### Trabajando con Ramas

#### Crear una rama nueva
 git branch nombre-rama

#### Cambiarse de rama
 git checkout nombre-rama


### Organización de Ramas
- **main:** Código estable y listo para producción.
- **develop:** Donde se prueban nuevas funciones.
- **qa:** Usada para pruebas antes de subir cambios.
- **feature/{HU-x}:** Para trabajar en historias de usuario.
- **feature/activity:** Para tareas semanales o eventos.

## 5. ¿Qué es un Mockup?

### Explicación
Un mockup es un modelo visual de una pantalla o interfaz que muestra cómo quedará el diseño antes de programarlo.

### Características
- Ayuda a ver cómo se verá la app antes de hacerla.
- Puede ser una imagen fija o interactiva.
- Es útil para que diseñadores y programadores se entiendan mejor.

### ¿Por qué es útil?
- Permite detectar errores de diseño antes de programar.
- Facilita recibir comentarios antes de hacer cambios grandes.
- Hace que el desarrollo sea más rápido y eficiente.

Este repasoe es lo más importante sobre metodologías ágiles y herramientas clave para desarrollo de software.

