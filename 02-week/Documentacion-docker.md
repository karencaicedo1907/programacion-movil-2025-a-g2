# Documentación contenedor en docker y configuración en MYSQL

### Estudiante: 
- Karen Johana Caicedo Arias

## Paso 1: 
Se crea un carpeta en la ubicación de su preferencia y luego se descargan los archivos llamados ".env" , "docker-compose" y "Dockerfile" , para ubicarlos en esa carpeta.

### Imagen de representación
![Imag](img/image.png)

### Paso 2:
Se realiza la apertura de los archivos ".env, docker-compose y Dockerfile" en Visual Studio Code, cambiando el puerto en este caso al 3309 ya que el 3306 provocaba error. 

### Imagen revisando los archivos
![ImagVisual](img/Captura%20de%20pantalla%202025-02-11%20171812.png)

## Paso 3: 
Abrir Docker, además en la carpeta donde se ubican los archivos abrir el cmd para utilizar los siguientes comandos de crear y montar el contenedor.

- docker build -t custom-mysql .
- docker-compose down
- docker-compose up -d --build

### Imagen Comandos
![ImgComandos](img/Captura%20de%20pantalla%202025-02-11%20172452.png)

## Paso 4: 
Verificar que el contenedor este corriendo funcionalmente en el Docker.

### Imagen Docker
![ImgDocker](img/Captura%20de%20pantalla%202025-02-11%20172710.png)

## Paso 5:
Abrimos Workbench, añadimos una nueva conexión con el nombre del contenedor y el puerto.

#### Imagen Workbench
![ImgWorkbench](img/Captura%20de%20pantalla%202025-02-11%20173859.png)

## Paso 6:
Nos ubicamos en el Docker, exactamente en el exec de nuestro contenedor para digitar los siguientes comandos, comprobando la funcionalidad.

### Imagen Exec
![ImgExec](img/Captura%20de%20pantalla%202025-02-11%20172649.png)

## Paso 7:
En la conexión creada de MYSQL ingresamos con la contraseña correspondiente, finalmente comprobamos que la base y la tabla se hayan creado con éxito.

### Imagen conexión
![ImgConexion](img/Captura%20de%20pantalla%202025-02-11%20175011.png)