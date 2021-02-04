function TraerData() {
    var entidad = $("#selectNombre :selected").val();
    var estatus = $("input[name=radioIncidencia]:checked").val();

    $.ajax({
        url: 'https://localhost:44372/api/Recomendaciones/GetAllIncidencia?entidad=' + entidad + 
        '&estatus='+ estatus,
        type: 'GET',
        success: function (data) {
            FillTable(data);
           
        }
    });

}

function FillTable(data){
    console.log(data);
    for (var i = 0; i < data.datos.length; i++){
        var row = "<tr>";
        row += "<td>" + data.datos[i].codigo + + data.datos[i].proyecto +"<br />" + data.datos[i].categoria +"</td>";
        if(data.datos[i].riesgo == "Alto (4)"){
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.datos[i].riesgo == "Moderado (3)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.datos[i].riesgo == "Medio (2)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
        }
        else if(data.datos[i].riesgo == "Bajo (1)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
        }

        row += "</tr>";

        $("#tableBody").append(row);
    }
}



