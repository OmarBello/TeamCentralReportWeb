function TraerData() {
    var entidad = $("#selectNombre :selected").val();
    var estatus = $("input[name=radioIncidencia]:checked").val();

    $.getJSON({
        url: 'https://localhost:44372/api/Recomendaciones/GetAllIncidencia?entidad='+entidad+
        '&estatus='+estatus,
        type: 'GET',
        success: function (data) {
            FillTable(data);
            console.log(data);
        }
    });

}

function FillTable(data){
    console.log(data);
    for (var i = 0; i < data.sp.length; i++){
        var row = "<tr>";
        row += "<td><strong>" + data.sp[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data.sp[i].proyecto + "</strong> <br /> <br />" + data.sp[i].categoria +"</td>";
        if(data.sp[i].riesgo == "Alto (4)"){
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.sp[i].riesgo == "Moderado (3)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.sp[i].riesgo == "Medio (2)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.sp[i].riesgo == "Bajo (1)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
        }

        row += "</tr>";

        $("#tableBody").append(row);
    }

    for (var i = 0; i < data.sp.length; i++){
        var row = "<tr>";
        row += "<td><strong>" + data.sp[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data.sp[i].proyecto + "</strong> <br /> <br />" + data.sp[i].titulo +"</td>";
        row += "<td>" +data.sp[i].riesgo+"</td>";
        row += "<td>" +data.sp[i].categoria+"</td>";
        row += "<td>" +data.sp[i].responsable+"</td>";
        row += "<td>" +data.sp[i].fecha_Estimada+"</td>";
        row += "<td>" +data.sp[i].atraso+"</td>";
        row += "</tr>";

        $("#tablebodySecundario").append(row);
    }
}

// function TraerData() {
//     $(document).ready(function() {
//         var entidad = $("#selectNombre :selected").val();
//         var estatus = $("input[name=radioIncidencia]:checked").val();
    
//         $.getJSON("https://localhost:44372/api/Recomendaciones/GetAllIncidencia?entidad="+entidad+"&estatus="+estatus,function(data) {
//             console.log(data);
//             var items = [];
//             for (var i = 0; i < data.sp.length; i++) {
//                 items.push(data.sp[i]);
//             }
//             var employee_data = '';
//             $.each(items, function(key, value) {
//                 employee_data += '<tr>';
//                 employee_data += "<td>" + data.sp[i].codigo + + data.sp[i].proyecto +"<br />" + data.sp[i].categoria +"</td>";
//                 employee_data += '</tr>';
    
    
//             });
//             $('#tableBody').append(employee_data);
    
//         });
    
//     });
// }




