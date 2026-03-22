const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

async function main() {
  console.log("--- Calculadora de Impacto Forestal ---");

  // Constante de producción
  const RESMAS_POR_ARBOL = 585.93;

  // Recolectando la cantidad de resmas deseadas
  const inputResmas = await ask('¿Cuántas resmas de papel necesitas calcular? ');
  const cantidadResmas = Number(inputResmas);

  // Proceso: Cálculo de árboles necesarios
  // Fórmula: Árboles = Resmas Totales / Resmas por Árbol
  const arbolesNecesarios = cantidadResmas / RESMAS_POR_ARBOL;

  // Generando el reporte
  console.log('\n---------------------------------------');
  console.log('         ANÁLISIS DE RECURSOS          ');
  console.log('---------------------------------------');
  
  if (isNaN(cantidadResmas) || cantidadResmas <= 0) {
    console.log('Error: Ingresa una cantidad de resmas válida.');
  } else {
    console.log(`Resmas deseadas:      ${cantidadResmas}`);
    console.log(`Producción por árbol: ${RESMAS_POR_ARBOL} resmas`);
    console.log('---------------------------------------');
    
    // Math.ceil() se usa porque no puedes talar "medio" árbol para completar
    console.log(`Árboles exactos:      ${arbolesNecesarios.toFixed(4)}`);
    console.log(`Árboles a utilizar:   ${Math.ceil(arbolesNecesarios)} (mínimo entero)`);
  }
  
  console.log('---------------------------------------');
  console.log('Recuerda usar el papel de forma responsable.');

  rl.close();
}

main();