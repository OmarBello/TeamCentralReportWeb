$(document).ready(function() {
    $.getJSON("https://172.17.50.98:443/api/Recomendaciones/Cerradas",function(data) {
        console.log(data);
        var items = [];
        for (var i = 0; i < data.sp.length; i++) {
            items.push(data.sp[i]);
        }
        var employee_data = '';
        $.each(items, function(key, value) {
            employee_data += '<tr>';
            employee_data += '<td>' + value.codigo + '</td>';
            employee_data += '<td>' + value.proyecto + '</td>';
            employee_data += '<td>' + value.titulo + '</td>';
            employee_data += '<td>' + value.estado + '</td>';
            employee_data += '<td>' + value.categoria + '</td>';
            employee_data += '<td>' + value.riesgo + '</td>';          
            employee_data += '<td>' + value.coordinador + '</td>';
            employee_data += '<td>' + value.responsable + '</td>';
            employee_data += '<td>' + value.entidad + '</td>';
            employee_data += '<td>' + value.fecha_Envio + '</td>';
            employee_data += '</tr>';


        });
        $('#contenido').append(employee_data);

    });

});