const prompt = require("prompt-sync")();
let userMarca;
let userModelo;
let userAnio;
let userKilometraje;
let userPrecio;


function Vehiculo(marca, modelo, anio, kilometraje, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.kilometraje = kilometraje;
    this.precio = precio;
    this.estadoVehiculo = "n/a";
  


    this.mostrarDatosVehiculo = function(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.anio} \nKilometraje: ${this.kilometraje} \nPrecio: ${this.precio} \nEstado del vehiculo: ${this.estadoVehiculo}\n\n`)        
    }

    this.aplicarDescuento = function(){
        let descuento = 0.15;
        if(this.precio >= 100000000){
            this.precio = precio - (precio*descuento)
        }
        this.mostrarDatosVehiculo();
    }

    this.validarEstado = function(){
        if(this.kilometraje <= 200){
            this.estadoVehiculo = "NUEVO";
        } else {
            this.estadoVehiculo = "USADO";
        }
        this.mostrarDatosVehiculo();     
    }
    


}

function preguntarDatos(){
    userMarca = prompt("*** Ingrese la marca: ");
    userModelo = prompt("*** Ingrese el modelo: ");
    userAnio = Number(prompt("*** Ingrese el año del vehiculo: "));
    userKilometraje = Number(prompt("*** Ingrese el kilometraje: "));
    userPrecio = Number(prompt("*** Ingrese el precio del vehiculo: "));  
    console.log("\n-----------------\n\n");    
}



console.log("\n\n******* EJERCICIO 5 *******\n\n");
//Registrar vehiculos
console.log("\n\n**** Modulo De Registro *****\n\n")
preguntarDatos();
const primerVehiculo = new Vehiculo(userMarca, userModelo, userAnio, userKilometraje, userPrecio );
preguntarDatos();
const segundoVehiculo = new Vehiculo(userMarca, userModelo, userAnio, userKilometraje, userPrecio);
//preguntarDatos();
//const tercerVehiculo = new Vehiculo(userMarca, userModelo, userAnio, userKilometraje, userPrecio);


//Funcion mostrar datos vehiculo
console.log("\n\n--- Ficha del vehiculo ---\n");
primerVehiculo.mostrarDatosVehiculo();
segundoVehiculo.mostrarDatosVehiculo();
//tercerVehiculo.mostrarDatosVehiculo();


//Funcion actualizar precio
console.log("\n\n--- Actualizar Precio ---\n");
primerVehiculo.aplicarDescuento();
segundoVehiculo.aplicarDescuento();
console.log("----------------------------------\n");

//Funcion validar estado del vehiculo
console.log("\n\n--- Validar Estado ---\n");
primerVehiculo.validarEstado();
segundoVehiculo.validarEstado();
console.log("----------------------------------\n");



