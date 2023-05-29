// Declaracion de variables
let nombre = 'ramiro';
let apellido = 'navarrete';
// concatenacion mediante interpolacion
let estudiante = `${nombre} ${apellido}`;

//mettodos lower y upper, mas la longitud
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLength = estudiante.length;

// Primer y Ultimo
let primeraLetra = estudiante.charAt(0)
let ultimoCaracter = estudiante.charAt(estudiante.length - 1);

// Cadena de texto sin espacios
let sinEspacios = estudiante.replace(/\s/g, "");

// esta o no esta
let nombreEstaEnEstudiante = estudiante.includes(`${nombre}`);