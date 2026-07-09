function Computador(marca, procesador, ram, precio, discoDuro){
    this.marca = marca;
    this.procesador= procesador;
    this.ram = ram;
    this.precio = precio;
    this.marca = marca;
}

const computadorCasa = new Computador("Asus", "Intel Core i5", 16, 512, 2199945);
const computadorTodoEnUno = new Computador("Lenovo", "AMD Ryzen 5", 16, 1024, 2429900);
const computadorPortatil = new Computador("HP", "Intel Core i7-", 24, 1024, 2618000);

console.log("\n\n******* EJERCICIO 1 *******\n\n");
console.log("Computadores disponibles 💻:\n");
console.log(`Marca: ${computadorCasa.marca} \nProcesador: ${computadorCasa.procesador} \nRam: ${computadorCasa.ram} \nDisco duro: ${computadorCasa.discoDuro} \nPrecio: ${computadorCasa.precio}\n\n`);
console.log(`Marca: ${computadorTodoEnUno.marca} \nProcesador: ${computadorTodoEnUno.procesador} \nRam: ${computadorTodoEnUno.ram} \nDisco duro: ${computadorTodoEnUno.discoDuro} \nPrecio: ${computadorTodoEnUno.precio}\n\n`);
console.log(`Marca: ${computadorPortatil.marca} \nProcesador: ${computadorPortatil.procesador} \nRam: ${computadorPortatil.ram} \nDisco duro: ${computadorPortatil.discoDuro} \nPrecio: ${computadorPortatil.precio}\n\n`);

