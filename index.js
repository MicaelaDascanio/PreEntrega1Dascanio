


let condition = true
let edad = parseInt(prompt('Ingrese su edad '))

while (condition){
    if (edad>=18){
        alert('Bienvenido')
        condition = false
    }else {
        alert('No puede ver esta página')
        edad = parseInt(prompt('Ingrese nueva edad '))
    }
}