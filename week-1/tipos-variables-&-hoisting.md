# 1. Declaración de variables: Declara tres variables usando var, let y const. Asigna a cada una un valor de un tipo de dato diferente.

    ```javascript
    var number = 19
    const petsArray = ["dog", "cat", "bunny", "hamster"]
    let string = "this a string"
    ```

# 2. Reasignación de variables: Intenta reasignar las variables declaradas en el ejercicio 1. ¿Qué sucede con cada tipo de variable?

    ```javascript
    number = 3 // Si se puede cambiar
    petsArray  = ["ferret", "horse", "pig"] // No se puede cambiar, es un error debido a que se está usando una variable constante
    string = "this is another string" // Si se puede cambiar
    ```

# 3. Alcance de las variables: Crea una función e intenta acceder a una variable let definida dentro de la función desde fuera de la función. ¿Qué sucede?

    ```javascript
    function saludo(){
        let primer = "buenos dias"
        console.log("dentro de funcion", primer)
    }
    saludo()
    console.log("fuera de funcion", primer)
    //Hay un error de referencia debido a que equis solo existe dentro del bloque de la función
    ```

# 4. Alcance de las variables (parte 2): Ahora declara una variable var dentro de la función. ¿Puedes acceder a ella desde fuera de la función?

    ```javascript
        console.log("fuera de funcion", primer)
        function saludo(){
            var primer = "buenos dias"
            console.log("dentro de funcion", primer)
        }
        saludo()
    // Dentro de la función si fuciona pero afuera sigue dando un ReferenceError debido a que primer no esta definido (?)
    ```

# 5. Hoisting: Declara una variable con var después de un bloque de código que intenta acceder a esa variable. ¿Qué valor se obtiene al acceder a la variable antes de su declaración?

    ```javascript
        console.log(y)
        var y = 30
        //Se obtiene un valor undefined
    ```

# 6. Hoisting (parte 2): Repite el ejercicio 5, pero esta vez con una variable let. ¿Qué sucede?

    ```javascript
        console.log(y)
        let y = 30
        //Hay un error de referencia debido a que se intenta acceder antes de la declaración de la variable
    ```

# 7. Hoisting de funciones: Declara una función después de un bloque de código que intenta llamar a esa función. ¿Se puede ejecutar la función antes de su declaración?

    ```javascript
        saludo()
        function saludo(){
            console.log("buenos dias)
        }
        // si se puede ejecutar
    ```

# 8. Tipos de datos: Declara variables y asigna a cada una un valor de un tipo de datos diferente. Luego, utiliza typeof para verificar el tipo de cada variable.

    ```javascript
        number = 19
        petsArray = ["dog", "cat", "bunny", "hamster"]
        string = "this a string"
        console.log(typeof(number))
        console.log(typeof(petsArray))
        console.log(typeof(string))
    ```

# 9. Conversión de tipos: Declara una variable con un número como una cadena (por ejemplo, "123"). Luego, intenta convertirlo en un número usando el objeto Number.

    ```javascript
        let numberTest = "123"
        console.log(Number(numberTest))
    ```

# 10. Objetos y arrays: Declara una variable como un objeto con algunas propiedades y un array con algunos elementos. Luego, intenta agregar, modificar y eliminar propiedades y elementos.

    ```javascript
        let arrayEquiposPL = ["Tottenham", "Chelsea", "Arsenal", "Brighton"]
        let objetoLigas = { premierLeague : "Manchester City",
        laLiga : "Barcelona",
        serieA : "Napoli",
        bundesliga: "Bayern Munich"
        }

        //Para array
        arrayEquiposPL.pop()
        arrayEquiposPL.push("Manchester City")
        arrayEquiposPL.splice(2,1,"Manchester United")
        //Para objeto
        objetoLigas.ligue1 = "Paris Saint-Germain"
        delete objetoLigas.bundesliga
        objetoLigas.serieA = "A.C. Milan"

    ```
