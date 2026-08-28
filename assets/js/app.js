//Constantes y variables
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
