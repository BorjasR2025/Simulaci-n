document.getElementById('generarBtn').addEventListener('click', generarNumeros);

function generarNumeros() {
    const semillaField = document.getElementById('semilla');
    const cantidadField = document.getElementById('cantidad');
    const resultadoTabla = document.getElementById('resultadoTabla').getElementsByTagName('tbody')[0];

    const semilla = parseInt(semillaField.value);
    const cantidad = parseInt(cantidadField.value);

    if (String(semilla).length <= 3) {
        alert("La semilla debe tener más de 3 dígitos.");
        return;
    }

    resultadoTabla.innerHTML = ''; // Limpiar tabla

    const D = String(semilla).length;
    let Xi = semilla;

    for (let i = 0; i < cantidad; i++) {
        const Yi = Xi * Xi;
        const YiStr = String(Yi).padStart(2 * D, '0');
        const XiStr = YiStr.substring((YiStr.length - D) / 2, (YiStr.length - D) / 2 + D);
        const ri = parseInt(XiStr) / Math.pow(10, D);

        const newRow = resultadoTabla.insertRow();
        newRow.insertCell(0).textContent = Xi;
        newRow.insertCell(1).textContent = `(${Xi})^2`;
        newRow.insertCell(2).textContent = YiStr;
        newRow.insertCell(3).textContent = XiStr;
        newRow.insertCell(4).textContent = ri.toFixed(4);

        Xi = parseInt(XiStr);
    }
}