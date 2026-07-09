const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, anio, kilometraje, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.kilometraje = kilometraje;
    this.precio = precio;
}

let user

