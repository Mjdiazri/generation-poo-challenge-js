function Libro(titulo, autor, anio, area, prestado){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.prestado = false;

    this.prestar = function(){
        if (this.prestado === false){
            this.prestado = true;
            console.log("Prestamo ok");
        } else {
            console.log("-------------------");
            console.log("Libro no disponible")
            console.log("--------------------");

        }
    }

    this.devolver = function(){
        if(this.prestado === true){
            this.prestado = false;
            console.log("Devolucion ok");
        } else {
            console.log("------------------------");
            console.log("Alerta, el libro no registra en prestamo")
            console.log("------------------------");
        }
    }
}

const libro = new Libro("El castillo en el aire", "Diana Wynne Jones", 1990, "Fantasia");
console.log("\n\n******* EJERCICIO 4 *******\n\n");
console.log(`Estado del proceso con el libro: ${libro.titulo}.\n`);
libro.prestar();
libro.prestar();
libro.devolver();
libro.devolver();
