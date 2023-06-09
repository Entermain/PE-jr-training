# 1. Creación de objetos: Crea un objeto para representar un libro, que incluya propiedades para el título, el autor y el año de publicación.

    ```javascript
        const libro = {
            titulo : "Circe",
            "año de publicacion" : 2019,
            autor : "Madeline Miller"
        }

    ```

# 2. Acceso a las propiedades de un objeto: Accede a cada una de las propiedades del objeto que creaste en el ejercicio 1 e imprímelas.

    ```javascript
        console.log(libro.titulo)
    ```

# 3. Modificar propiedades de un objeto: Cambia el valor de la propiedad "año de publicación" en el objeto del ejercicio 1.

    ```javascript
        libro["año de publicacion"] = 2018
    ```

# 4. Agregar propiedades a un objeto: Agrega una nueva propiedad al objeto del ejercicio 1, como la cantidad de páginas del libro.

    ```javascript
        libro.paginas = 393
    ```

# 5. Eliminar propiedades de un objeto: Utiliza el operador delete para eliminar la propiedad que agregaste en el ejercicio 4.

    ```javascript
        delete libro.paginas
    ```

# 6. Recorrer las propiedades de un objeto: Utiliza un bucle for...in para recorrer todas las propiedades del objeto del ejercicio 1 e imprimir su nombre y valor.

    ```javascript
        for(let key in libro){
            console.log(key,":" ,  libro[key])
        }
    ```

# 7. Uso de métodos en objetos: Añade un método al objeto del ejercicio 1 que retorne una cadena con una descripción completa del libro.

    ```javascript
        libro.fnc = function() {
            return "En la casa de Helios, dios del Sol y el más poderoso de los Titanes, nace una hija. Pero Circe es una niña extraña, ni poderosa como su padre ni cruelmente seductora como su madre. Al volver al mundo de los mortales en busca de compañía, descubre que posee el poder de la brujería que puede transformar a los rivales en monstruos y amenazar a los dioses"
        }
    ```

# 8. El operador this en métodos de objetos: Modifica el método del ejercicio 7 para que utilice this para acceder a las propiedades del objeto.

    ```javascript
        libro.fnc = function() {
            console.log(this.titulo + " fue escrito por " + this.autor + "en el año " + this["año de publicacion"])
        }
    ```

# 9. Optional chaining: Crea un objeto con propiedades anidadas y utiliza el operador optional chaining (?.) para acceder a una propiedad que puede no existir.

    ```javascript
        const test = {
            saludo : "hola",
            despedida : "adios",
            conversacion : {
                key31 : "hijole",
                key32 : "que es esto"
            }
        }

        console.log(test.conversacion?.key33)
    ```

# 10. Nullish coalescing operator: Crea un objeto con una propiedad que puede ser null o undefined y utiliza el operador Nullish coalescing (??) para proporcionar un valor por defecto.

    ```javascript
        const datosDeUsuario = {
            nombre : "Edgar",
            edad : null  ?? "no proporcionada",
            pais : "Mexico"
        }
    ```
