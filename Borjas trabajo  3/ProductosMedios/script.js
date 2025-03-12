document.getElementById('generarBtn').addEventListener('click', generarNumeros);

function generarNumeros() {
    const semilla1Field = document.getElementById('semilla1');
    const semilla2Field = document.getElementById('semilla2');
    const cantidadField = document.getElementById('cantidad');
    const resultadoTabla = document.getElementById('resultadoTabla').getElementsByTagName('tbody')[0];

    const semilla1 = parseInt(semilla1Field.value);
    const semilla2 = parseInt(semilla2Field.value);
    const cantidad = parseInt(cantidadField.value);

    if (String(semilla1).length <= 3 || String(semilla2).length <= 3) {
        alert("Las semillas deben tener más de 3 dígitos.");
        return;
    }

    resultadoTabla.innerHTML = ''; // Limpiar tabla

    const D = String(semilla1).length;
    let X0 = semilla1;
    let X1 = semilla2;

    for (let i = 0; i < cantidad; i++) {
        const Yi = X0 * X1;
        const YiStr = String(Yi).padStart(2 * D, '0');
        const XiStr = YiStr.substring((YiStr.length - D) / 2, (YiStr.length - D) / 2 + D);
        const Xi = parseInt(XiStr);
        const ri = Xi / Math.pow(10, D);

        const newRow = resultadoTabla.insertRow();
        newRow.insertCell(0).textContent = X0;
        newRow.insertCell(1).textContent = `(${X0}) * ${X1}`;
        newRow.insertCell(2).textContent = YiStr;
        newRow.insertCell(3).textContent = XiStr;
        newRow.insertCell(4).textContent = ri.toFixed(4);

        // Actualizar las semillas para la siguiente iteración
        X0 = X1;
        X1 = Xi;
    }
}