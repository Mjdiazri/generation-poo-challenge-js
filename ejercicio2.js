function Mascota(nombre, especie, raza, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
    this. peso = peso;

    this.presentar = function(){
        return `Hola mi nombre es ${this.nombre}, soy un@ ${raza} (${this.especie}), tengo ${this.edad} año(s) y peso ${this.peso} kg.`;
    }
}

const mascotaKennedy = new Mascota("Max", "Perro", "Labrador", 3, 32);
const mascotaEngativa = new Mascota("Luna", "Gato", "Siamés", 2, 4.5);
const mascotaCandelaria = new Mascota("Coco", "Conejo", "Enano Neerlandés", 1, 1.2);

console.log("\n\n******* EJERCICIO 2 *******\n\n");
console.log("Presentacion de mascotas 😸🐶🐷🐰🐹:\n");
console.log(mascotaKennedy.presentar());
console.log("------------------------\n");
console.log(mascotaEngativa.presentar());
console.log("------------------------\n");
console.log(mascotaCandelaria.presentar());
console.log("------------------------\n")