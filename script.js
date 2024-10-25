let numero = 10
let nombre = "Pocoyó"
let caducado = true
let amigos = ["ballena", "perro", "pájaro"]
let personaje = 
{
    tipo: "animado",
    numOjos: 8
}
// Guardar variables en LocalStorage
localStorage.setItem("numeroEnLS", 10)
localStorage.setItem("nombreEnLS", "Pocoyó")
localStorage.setItem("booleanEnLS", JSON.stringify(true))
localStorage.setItem("amigosEnLS", JSON.stringify(amigos))
localStorage.setItem("personajeEnLS", JSON.stringify(personaje))

// console.log(parseInt(localStorage.getItem("numeroEnLS")))
console.log( JSON.parse(localStorage.getItem("booleanEnLS")))
console.log( JSON.parse(localStorage.getItem("amigosEnLS")))
console.log( JSON.parse(localStorage.getItem("personajeEnLS")))



if(localStorage.getItem("booleanEnLS"))
{
    console.log("entra")
}