/* Constantes y variables
const nombreActividad = "Taller de fotografía";
const capacidad = 30;
let inscritos = 18;
const cuposDisponibles = capacidad - inscritos;
let estado = "Sin determinar";

//Lo que se muestra por pantalla
console.log(nombreActividad);
console.log(capacidad);
console.log(inscritos);
console.log( `Quedan ${cuposDisponibles} cupos disponibles`);

// If y else
if (cuposDisponibles === 0) {
  estado = "Completa";
} else if (cuposDisponibles <= 5) {
  estado = "Últimos cupos";
} else {
  estado = "Disponible";
}
console.log(estado);

//Ejemplo funcion
function calcularCupos(capacidad, inscritos) {
  const disponibles = capacidad - inscritos;
  return disponibles;
}

// Constante + llamado de funcion 
const cuposTaller = calcularCupos(30, 18);
console.log(cuposTaller);

//Funcion + if
function obtenerEstado(cuposDisponibles) {
  if (cuposDisponibles === 0) {
    return "Completa";
  }

  if (cuposDisponibles <= 5) {
    return "Últimos cupos";
  }

  return "Disponible";
}

// Constante + funcion
const estadoTaller = obtenerEstado(cuposTaller);
console.log(estadoTaller);

// Constante con una lista
const actividades = [
  "Taller de fotografía",
  "Concierto comunitario",
  "Muestra de teatro"
];

//Posision numerica de cada valor de la lista
console.log(actividades[0]);
console.log(actividades[1]);

//Uso de length para calcular el tamaño de la lista (3)
console.log(`La agenda contiene ${actividades.length} actividades`);

//Uso de un for
for (const actividad of actividades) {
  console.log(actividad);
}

const titulo = document.querySelector("#titulo-cartelera");
titulo.classList.add("destacado");

//Cartelera
const cartelera = document.querySelector("#cartelera");

const tarjeta = document.createElement("article");
tarjeta.classList.add("tarjeta");

const nombre = document.createElement("h2");
nombre.textContent = actividades[0].nombre;

tarjeta.appendChild(nombre);
cartelera.appendChild(tarjeta);
*/ 

const titulo = document.querySelector("#titulo-cartelera");
const boton = document.querySelector("#boton-destacar");
const actividades = [
  {
    codigo: "MUS001",
    nombre: "Taller de guitarra inicial",
    categoria: "Música",
    precio: 15000,
    cupos: 20
  },
  {
    codigo: "ART002",
    nombre: "Acuarela para principiantes",
    categoria: "Artes visuales",
    precio: 12000,
    cupos: 4
  },
  {
    codigo: "TEA003",
    nombre: "Teatro comunitario",
    categoria: "Teatro",
    precio: 0,
    cupos: 0
  }
];

//FUN
function destacarTitulo() {
  titulo.classList.add("destacado");
}
boton.addEventListener("click", destacarTitulo);


const cartelera = document.querySelector("#cartelera");

//FUN
function crearTarjeta(actividad) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h2");
  nombre.textContent = actividad.nombre;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${actividad.categoria}`;

  const cupos = document.createElement("p");
  cupos.textContent = `Cupos: ${actividad.cupos}`;

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(categoria);
  tarjeta.appendChild(cupos);
  cartelera.appendChild(tarjeta);
}

//Ciclo
for (const actividad of actividades) {
  crearTarjeta(actividad);
}



