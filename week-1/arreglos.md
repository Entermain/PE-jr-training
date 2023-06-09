# 1. Creación de arreglos: Crea un arreglo con cinco elementos y registra su longitud.

    ```javascript
        const diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        console.log(diasDeLaSemana.length)
    ```

# 2. Acceso a los elementos del arreglo: Accede al primer y al último elemento del arreglo que creaste en el ejercicio 1.

    ```javascript
        let primerElemento = diasDeLaSemana[0];
        let ultimoElemento = diasDeLaSemana[diasDeLaSemana.length-1]
    ```

# 3. Modificar elementos de un arreglo: Cambia el valor del tercer elemento en el arreglo que creaste en el ejercicio 1.

    ```javascript
        diasDeLaSemana.splice(2,1, "dia de Champions League")
    ```

# 4. Agregar elementos a un arreglo: Utiliza el método push para agregar un elemento al final del arreglo del ejercicio 1.

    ```javascript
        diasDeLaSemana.push("lunes de nuevo :(")
    ```

# 5. Remover elementos de un arreglo: Utiliza el método pop para eliminar el último elemento del arreglo del ejercicio 1.

    ```javascript
        diasDeLaSemana.pop()
    ```

# 6. Recorrer un arreglo con un bucle for: Escribe un bucle for que recorra todos los elementos del arreglo del ejercicio 1 y los imprima.

    ```javascript
        for(let dia of diasDeLaSemana){
            console.log(dia)
        }
    ```

# 7. Recorrer un arreglo con el método forEach: Ahora utiliza el método forEach para hacer lo mismo que en el ejercicio 6.

    ```javascript
        diasDeLaSemana.forEach(dia => console.log(dia))
    ```

# 8. Filtrar elementos de un arreglo: Crea un arreglo de números y utiliza el método filter para obtener un nuevo arreglo con solo los números que son mayores que 10.

    ```javascript
        let numbers = [2,4,6,8,10,12,14,16,18,20]
        const newNumbers = numbers.filter(numero => numero >= 14)
    ```

# 9. Transformar elementos de un arreglo: A partir del arreglo de números del ejercicio 8, utiliza el método map para obtener un nuevo arreglo donde cada número se haya multiplicado por 10.

    ```javascript
        const duplicatedNumbers = numbers.map(numero => numero*2)
        console.log(duplicatedNumbers)
    ```

# 10. Reducir un arreglo a un único valor: A partir del arreglo de números del ejercicio 9, utiliza el método reduce para obtener la suma de todos los números en el arreglo.

    ```javascript
        const filteredNumbers = duplicatedNumbers.reduce((acumulator, currentValue) => acumulator + currentValue)
    ```
