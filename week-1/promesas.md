# 1. Creación de una promesa: Crea una promesa que se resuelva con el mensaje "¡Promesa resuelta!" después de 2 segundos.

    ```javascript
        const delay = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Promesa resuelta!")},2000)
        })

    ```

# 2. Consumir una promesa: Consume la promesa que creaste en el ejercicio 1 usando los métodos .then() y .catch().

    ```javascript
        delay.then((mensaje)=>console.log(mensaje))
        .catch((error)=>console.log(error))
    ```

# 3. Encadenamiento de promesas: Crea una cadena de promesas que se resuelvan una tras otra. Cada promesa debe agregar un número a un valor inicial, y la cadena completa debe sumar un total de 10 al valor inicial.

    ```javascript
        function agregarNumero(valorInicial, numero) {
            return new Promise((resolve, reject) => {
                    let resultado = valorInicial + numero;
                        resolve(resultado);
                        vo = resultado
                        console.log(resultado)
        })
        }

        let vo = 0
        agregarNumero(vo,3).then(r=>agregarNumero(vo,5)).then(r=>agregarNumero(vo,2))

    ```

# 4. Manejo de errores: Crea una promesa que se rechace con un Error. Consume la promesa y maneja el error correctamente.

    ```javascript
        const testError = new Promise((resolve,reject)=>{
            let fail = 1 + 5
            if(fail == 2){
                resolve("no se como funciono pero funciono")
            }
            else{
                reject("claramente rechazada")
            }
        })

        testError.then((mensaje)=>{
            console.log(mensaje)
        }).catch((mensaje)=>{
            console.log(mensaje)
        })
    ```

# 5. Promesa que se resuelve inmediatamente: Crea una promesa que se resuelva inmediatamente, y consume su resultado.

    ```javascript
        const r = Promise.resolve("listo")
        r.then((mensaje)=>{
            console.log(mensaje)
        })
    ```

# 6. Promesa que se rechaza inmediatamente: Crea una promesa que se rechace inmediatamente, y maneja el error.

    ```javascript
        const rej = Promise.reject("esta promesa esta rechazada")
        rej.catch(error=>{
            console.log(error)
        })
    ```

# 7. Promesas en paralelo: Crea tres promesas que se resuelvan después de 1, 2 y 3 segundos respectivamente. Utiliza Promise.all() para esperar a que todas ellas se resuelvan.

    ```javascript
        const delay1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("1 segundo")},1000)
        })

        const delay2 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("2 segundos")},2000)
        })

        const delay3 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("3 segundos")},3000)
        })

        Promise.all([delay1,delay2,delay3]).then(mensaje=>console.log(mensaje))

    ```

# 8. Promesas en serie: Crea tres promesas similares a las del ejercicio 7, pero en lugar de resolverlas en paralelo, encadena las promesas para que se resuelvan en serie, una tras otra.

    ```javascript
        function delay(segundos){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve("esperé " + segundos + " segundos")},segundos*1000)
                })
            }

        delay(1).then(mensaje=>{
            console.log(mensaje)
            delay(2).then(mensaje=>{
                console.log(mensaje)
                delay(3).then(mensaje=>{
                    console.log(mensaje)
                })
            })})
    ```

# 9. Promise.race(): Crea dos promesas, una que se resuelva después de 1 segundo y otra que se rechace después de 2 segundos. Utiliza Promise.race() y maneja tanto la resolución como el rechazo.

    ```javascript
        const delayResolve = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Promesa resuelta!")},1000)
        })

        const delayReject = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("Promesa rechazada!")},2000)
        })

        Promise.race([delayResolve, delayReject]).then(mensaje=>console.log(mensaje))
        .catch(mensaje=>console.log(mensaje))
    ```

# 10. Async/await (PARA INVESTIGAR): Reescribe el ejercicio 7 utilizando async/await en lugar de .then() y .catch().

    ```javascript

    ```
