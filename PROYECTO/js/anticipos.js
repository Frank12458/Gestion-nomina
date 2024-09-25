// Función para calcular el anticipo
function calcularAnticipo() {
    // Obtener valores del DOM
    const salario = document.getElementById('salario').value;
    const anticipoInput = document.getElementById('anticipo');
    const motivo = document.getElementById('motivo').value;
    const fecha = document.getElementById('fecha').value;

    // Validación de los datos ingresados
    if (!salario || salario <= 0) {
        alert("Por favor, ingrese un salario base válido.");
        return;
    }

    if (!motivo) {
        alert("Por favor, ingrese el motivo del anticipo.");
        return;
    }

    if (!fecha) {
        alert("Por favor, ingrese una fecha válida.");
        return;
    }

    // Calcular el 45% del salario como anticipo
    const anticipo = (salario * 0.45).toFixed(2);
    anticipoInput.value = anticipo;

    // Crear un objeto de solicitud de anticipo
    const solicitudAnticipo = {
        salarioBase: parseFloat(salario),
        montoAnticipo: parseFloat(anticipo),
        motivo: motivo,
        fechaSolicitud: fecha
    };

    // Mostrar los detalles de la solicitud de anticipo en la consola
    console.log("Solicitud de Anticipo de Salario:");
    console.log(solicitudAnticipo);

    // Mostrar una confirmación
    alert(`Solicitud de anticipo enviada: \nSalario Base: ${solicitudAnticipo.salarioBase}\nMonto Anticipo: ${solicitudAnticipo.montoAnticipo}\nMotivo: ${solicitudAnticipo.motivo}\nFecha: ${solicitudAnticipo.fechaSolicitud}`);
}





//aprobacion_anticipos
function aprobarSolicitud(button) {
    const row = button.closest('tr');
    row.style.backgroundColor = '#d4edda';  // Verdecito para aprobado
    alert('Anticipo aprobado');
}

function denegarSolicitud(button) {
    const row = button.closest('tr');
    row.style.backgroundColor = '#f8d7da';  // Rojito para denegado
    alert('Anticipo denegado');
}


