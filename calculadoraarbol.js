function calcular() {
    alert("--- Calculadora de Impacto Forestal ---");

    let resmas = prompt("¿Cuántas resmas de papel desea producir?");
    
    // Convertimos a número
    let cantidad = parseFloat(resmas);

    if (!isNaN(cantidad)) {
        const RESMAS_POR_ARBOL = 500; 
        let resultado = cantidad / RESMAS_POR_ARBOL;

        alert("Para " + cantidad + " resmas, se necesitan " + resultado.toFixed(2) + " árboles.");
    } else {
        alert("Por favor, ingresa solo números.");
    }
}
