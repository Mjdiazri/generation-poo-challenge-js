function Estudiante(nombre, curso, semestre, notas){
    this.nombre = nombre;
    this.curso = curso;
    this.notas = notas;
    this.semestre = semestre;
    this.aprobado = "aprobado";
    
    let sumaNotas=0;
    let promedio=0;
    for(let i = 0; i < this.notas.length; i++){        
        sumaNotas += this.notas[i];
        console.log(sumaNotas)
        promedio = sumaNotas/this.notas.length;
    }
    if (promedio > 3.0){
            this.aprobado = "aprobado";
            console.log(promedio)
        } else {
            this.aprobado = "reprobado";
            console.log(promedio)
        }        


    this.mostrar = function(){
        console.log(`Nombre estudiante: ${this.nombre}, \nNombre del curso: ${this.curso} \nSemestre: ${this.semestre} \nEstado Aprobacion: ${this.aprobado} \nNotas obtenidas: ${this.notas}`);
    }
}


const estudiante1 = new Estudiante("Carlos Mendoza", "Logica Programacion", 3, [4.2, 3.8, 4.5]);
const estudiante2 = new Estudiante("Ana Maria Silva", "Logica Programacion", 5, [4.8, 4.9, 4.7]);
const estudiante3 = new Estudiante("Luis Tobon", "Logica Programacion", 2, [1.5, 3.0, 1.8]);
const estudiante4 = new Estudiante("Sofia Gomez", "Logica Programacion", 4, [3.5, 4.0, 3.2]);
console.log("\n\n******* EJERCICIO 3 *******\n\n");
console.log("Listado de estudiantes de la cohorte 6:\n");
console.log("------------------------");
estudiante1.mostrar();
console.log("------------------------\n");
estudiante2.mostrar();
console.log("------------------------\n");
estudiante3.mostrar();
console.log("------------------------\n");
estudiante4.mostrar();
console.log("------------------------\n");