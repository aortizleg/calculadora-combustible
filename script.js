window.onload = function() {
    document.getElementById("calcularBtn").addEventListener("click", calcular);
};

function calcular() {
    let km = parseFloat(document.getElementById("km").value);
    let consumo = parseFloat(document.getElementById("consumo").value);
    let precio = parseFloat(document.getElementById("precio").value);

    if (isNaN(km) || isNaN(consumo) || isNaN(precio)) {
        document.getElementById("resultado").innerText = "Por favor, ingrese valores válidos.";
        return;
    }

    let costo = (km * consumo / 100) * precio;
    document.getElementById("resultado").innerText = `Costo estimado: ${costo.toFixed(2)} €`;
}