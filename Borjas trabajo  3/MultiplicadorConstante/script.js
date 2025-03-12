document.getElementById('generarBtn').addEventListener('click', generarNumeros);

function generarNumeros() {
    const semillaField = document.getElementById('semilla');
    const constanteField = document.getElementById('constante');
    const cantidadField = document.getElementById('cantidad');
    const resultadoTabla = document.getElementById('resultadoTabla').getElementsByTagName('tbody')[0];

    const semilla = parseInt(semillaField.value);
    const constante = parseInt(constanteField.value);
    const cantidad = parseInt(cantidadField.value);

    // Validar que la semilla y constante tengan más de 3 dígitos
    if (String(semilla).length <= 3 || String(constante).length <= 3) {
        alert("La semilla y la constante deben tener más de 3 dígitos.");
        return;
    }

    resultadoTabla.innerHTML = ''; // Limpiar tabla

    const D = String(semilla).length;
    let X0 = semilla;
    const a = constante;

    for (let i = 0; i < cantidad; i++) {
        // Calcular Yi = a * Xi
        const Yi = a * X0;
        const YiStr = String(Yi).padStart(2 * D, '0'); // Asegurarse de que Yi tenga suficientes dígitos

        // Obtener los D dígitos del centro de Yi
        const centerStart = (YiStr.length - D) / 2;
        let XiStr = YiStr.substring(centerStart, centerStart + D);

        // Si no se pueden obtener D dígitos, agregar ceros a la izquierda
        if (XiStr.length < D) {
            XiStr = String(YiStr).padStart(D, '0');
        }

        const Xi = parseInt(XiStr); // Xi para el siguiente ciclo
        const ri = Xi / Math.pow(10, D); // r como fracción de Xi

        // Agregar fila a la tabla con los datos correspondientes
        const newRow = resultadoTabla.insertRow();
        newRow.insertCell(0).textContent = X0;
        newRow.insertCell(1).textContent = `(${a} * ${X0})`;
        newRow.insertCell(2).textContent = YiStr;
        newRow.insertCell(3).textContent = XiStr;
        newRow.insertCell(4).textContent = ri.toFixed(4);

        // Preparar para la siguiente iteración
        X0 = Xi;
    }
}