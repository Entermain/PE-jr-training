# 1. Definición de funciones: Define una función utilizando tanto una declaración de función como una expresión de función.

    ```javascript
        function saludo(){
            console.log("buenos dias")
        }

        const despedida = function(){
            console.log("buenas noches")
        }
    ```

# 2. Parámetros y argumentos: Define una función que tome dos parámetros y los sume. Llama a la función con dos argumentos y registra el resultado.

    ```javascript
        function suma(x,y){
            let resultado = x + y
            console.log(resultado)
        }
        suma(2,3)
        // El output es 5
    ```

# 3. Funciones anónimas: Crea una función anónima que retorne la longitud de una cadena dada. Asigna esta función a una variable y luego usa esta variable para llamar a la función.

    ```javascript
        const longitud = function(string){
            return string.length
        }
        console.log(longitud("mariposa"))
    ```

# 4. Funciones de flecha: Convierte la función anónima del ejercicio 3 en una función de flecha.

    ```javascript
        const longitud = (string) => {return string.length}
        // De igual manera se podrian quitar el return y las llaves para que quedara => string.length y debido a que quedaría como un implicit return
    ```

# 5. Funciones como valores: Crea una función que acepte otra función como parámetro. Llama a esta función con una función de flecha como argumento.

    ```javascript
        const tiempo = (hora24hrs) => {
            if(hora24hrs >= 12 ){
                return "noche"
            }
            else {
                return "mañana"
            }
        }

        function saludo(hora){
            if(saludo == "mañana"){
                console.log("buenos días")
            }
            else if(saludo == "noche"){
                console.log("buenas noches")
            }
        }
        saludo(tiempo(17))
    ```

# 6. El objeto this en funciones globales: Crea una función en el ámbito global que imprima el valor de this. ¿Qué valor obtienes?

    ```javascript
        function esto(){
            console.log(this)
        }
        // Se obtiene el objeto Window
    ```

# 7. El objeto this en métodos de objetos: Crea un objeto con un método que imprima el valor de this. ¿Qué valor obtienes cuando llamas a este método?

    ```javascript
        let obj = {
            element1: "first element",
            element2: "second element",
            funcThis : function () {
                console.log(this)
            }
        }
        obj.funcThis()
        //Se obtiene el valor de el objeto al que pertenece la función
    ```

# 8. Uso de funciones dentro de otras funciones: Crea una función que defina una segunda función interna. Esta segunda función deberá acceder a una variable de la función externa. Luego, llama a la función externa y observa el resultado.

    ```javascript
        function potencias (x){
            let cuadrado = x*x;
            console.log("el cuadrado del numero es: ", cuadrado)
            function cubica (){
                let alCubo = x*x*x
                console.log("el cubo del numero es: ", alCubo)
            }
            cubica()
        }

        potencias(2)
    ```

# 9. El objeto this en funciones de flecha: Crea una función de flecha en el ámbito global y otra como método de un objeto. En cada caso, imprime el valor de this. ¿Qué valor obtienes?

    ```javascript
        const esto() => {
            console.log(this)
        }
        esto()
        // En ambito global se obtiene el valor de Window

        const obj = {
            valor1 : "primer valor",
            valor2 : "segundo valor",
            esto : () => {
                console.log(this)
            }
        }
        obj.esto()
        // También se obtiene el valor de Window
    ```

# 10. El objeto this y el método call: Crea un objeto con un método que use this. Usa el método call para cambiar el contexto de this cuando llames a este método.

    ```javascript
        const premier = {
            campeon: "Manchester City",
            subcampeon: "Arsenal",
            mensaje: function (){
                return "primer lugar " + this.campeon + " segundo lugar " + this.subcampeon
            }
        }

        const laLiga = {
            campeon : "Barcelona",
            subcampeon : "Real Madrid"
        }

        premier.mensaje.call(laLiga)
    ```
