# **Proyecto Sancho Plancha**
Esta aplicación es una copia de la página [sanchoplancha](https://sanchoplancha.com.ar) con fines de aprendizaje.

**Este proyecto está creado con Angular CLI**.

***

## Dependencias necesarias

* [NodeJS](https://nodejs.org/es/)
    * Es recomendable utilizar la última versión estable.
    * Instalado NodeJS, es posible instalar las siguientes dependencias desde la terminal de comandos utilizado el cmd "npm".

* [TypeScript](https://www.typescriptlang.org/)
    * Abra la consola de comandos como administrador y ejecute el siguiente código:
    ```
    npm install -g typescript
    ```

    * Si está utilizando Linux o Mac, agregue la palabra "sudo" al inicio:
    ```
    sudo npm install -g typescript
    ```

* [Angular CLI](https://angular.io/cli)
    * En la misma ventana comandos como administrador ejecute el siguiente código:

    ```
    npm install -g @angular/cli    
    ```
    
    * Si está utilizando Linux o Mac, y durante la instalación tuvo un error, pruebe con el siguente comando:
    ```
    sudo npm install --unsafe -perm -g @angular/cli
    ```

* [Git](https://git-scm.com/)
    * En Windows descargue e instale la aplicación como sugiere la página.

    * En Linux o Mac, ejecute el siguiente código desde una terminal:
    ```
    sudo apt install git
    ```

***

## Clonación de repositorio

Cree una carpeta donde ubicará el proyecto. Abra una terminal en dicha dirección y ejecute el siguiente código:

```
git clone git@github.com:LeaCoria/Sancho_Plancha.git
```

Una vez clonado el código, dirijase a la carpeta raíz del proyecto y abra una terminal. Ejecute el siguiente comando para correr la aplicación:

```
ng serve -o
```