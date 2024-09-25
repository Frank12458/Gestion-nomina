function agregarEmpleado() {
    const table = document.getElementById('empleados-list');
    const row = table.insertRow();
    row.innerHTML = `<td>Nuevo Empleado</td><td>2</td><td>Posición</td><td>$500</td>`;
    alert("Empleado agregado");
}


/*
function mostrarFormulario() {
    document.getElementById('formularioEmpleado').style.display = 'block';
}

function registrarEmpleado() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let salario = document.getElementById('salario').value;

    if (nombre && apellido && salario) {
        let table = document.getElementById('empleadosTable');
        let row = table.insertRow();
        row.insertCell(0).innerHTML = nombre;
        row.insertCell(1).innerHTML = apellido;
        row.insertCell(2).innerHTML = salario;
        row.insertCell(3).innerHTML = `<button onclick="eliminarEmpleado(this)">Eliminar</button>`;

        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('salario').value = '';
        document.getElementById('formularioEmpleado').style.display = 'none';
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function eliminarEmpleado(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}*/

