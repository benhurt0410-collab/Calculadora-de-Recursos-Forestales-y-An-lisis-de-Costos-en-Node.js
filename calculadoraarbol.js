
async function iniciarCalculadora() {
    alert("--- Calculadora de Impacto Forestal ---");

    // Pedir datos al usuario
    let resmasDeseadas = prompt("¿Cuántas resmas de papel desea producir?");
    
    // Convertir a número
    resmasDeseadas = parseFloat(resmasDeseadas);

    if (!isNaN(resmasDeseadas)) {
        const RESMAS_POR_ARBOL = 500; // Valor de ejemplo
        let arbolesNecesarios = resmasDeseadas / RESMAS_POR_ARBOL;

        alert("Para producir " + resmasDeseadas + " resmas, se necesitan aproximadamente " + arbolesNecesarios.toFixed(2) + " árboles.");
        
        // También lo mostramos en la consola del navegador por si acaso
        console.log("Cálculo completado con éxito.");
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

// Ejecutar la función
iniciarCalculadora();
  console.log('Recuerda usar el papel de forma responsable.');

  rl.close();
}

main();
