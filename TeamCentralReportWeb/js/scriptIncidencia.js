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
            document.getElementById('Estatus').innerHTML = estatus;
            document.getElementById('TituloIncidencia').innerHTML = entidad;
        
        }
    });

}

function FillTable(data){
    document.getElementById('tableBody').innerHTML = '';
    document.getElementById('tablebodySecundario').innerHTML = '';
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
        document.getElementById('CantidadIncidencia').innerHTML = data.sp.length;
     
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


////////////////////////////////////////////////////////////////////////////////
//Fecha Actual

    let fecha = new Date();
    let mes = fecha.getMonth();
    let diaMes = fecha.getDate();
    let diaSemana = fecha.getDay();
    let anio = fecha.getFullYear();


    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();
    let prepend = hora >=12? "PM":"AM";

    let dias = new
    Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado');
       
    let meses = new 
    Array('Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto',
            'Septiembre','Octubre','Noviembre','Diciembre');  
    let fechaImprible =  (dias[diaSemana] + ", " + diaMes + " de " + meses[mes] + " de " + anio);

    document.getElementById('fechaDocumento').innerHTML = fechaImprible;

    let horaImprimible = hora + " : " + minuto + " : " + segundo + prepend;

    //salida
    document.getElementById('horaDocumento').innerHTML = horaImprimible;

  

  

////////////////////////////////////////////////////////////////////////////////
