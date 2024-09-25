document.getElementById('reporteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipo = document.getElementById('tipoReporte').value;
    alert(`Generando reporte de ${tipo}`);
});
