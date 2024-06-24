// script.js

function calculateInvestment(amount, rate, period) {

    // Obtener valores de los campos de entrada

    const amount_val = parseFloat(amount);

    const rate_val = parseFloat(rate) / 100;

    const period_val = parseInt(period);

 

    // Calcular la rentabilidad utilizando el interés compuesto

    const finalAmount = amount_val * rate_val * period_val;

    console.log(finalAmount);

 

    // Mostrar el resultado

    /* document.getElementById('result').innerHTML = `Monto Final: ${finalAmount.toFixed(2)}`; */

}