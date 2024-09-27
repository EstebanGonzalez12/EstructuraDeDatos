// let numero = 23
// let variasCosas = [23, true, 'Esteban', function(){}, [],  numero]
// let otroArreglo = []
 
// console.log(variasCosas[0]+ variasCosas[2])
// console.log (otroArreglo)
// console.log (variasCosas[0] * variasCosas[5])

// let numeros = [1,2,3,4,5,6,7,8,9,10]
// for(let index = 0; index < numeros.length; index++){
//     // console.log(numeros)
//     if(numeros[index] % 2 == 0)
//         console.log (numeros[index])
// }

let nombres =[]
for (let index = 0; index < 5; index++){
    nombres [index] = prompt('Ingrese su nombre: ')
}
for (let index = 0; index < nombres.length; index++){
    console.log(nombres[index])
}