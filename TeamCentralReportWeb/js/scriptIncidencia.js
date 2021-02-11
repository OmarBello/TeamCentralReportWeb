let Alto = 0;
let Moderado = 0;
let Medio = 0;
let Bajo = 0;
let Debilidad = 0;
let Incumplimiento = 0;

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

function TraerDataRefresh(){
    location.reload();
}

function FillTable(data){
     Alto = 0;
     Moderado = 0;
     Medio = 0;
     Bajo = 0;
     Debilidad = 0;
     Incumplimiento = 0;


    document.getElementById('tableBody').innerHTML = '';
    document.getElementById('tablebodySecundario').innerHTML = '';
    console.log(data);
    for (var i = 0; i < data.sp.length; i++){
        var row = "<tr>";
        row += "<td><strong>" + data.sp[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data.sp[i].proyecto + "</strong> <br />" + data.sp[i].categoria +"</td>";
        if(data.sp[i].riesgo == "Alto (4)"){
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";

            Alto++;
        }
        else if(data.sp[i].riesgo == "Moderado (3)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";

            Moderado++;
        }
        else if(data.sp[i].riesgo == "Medio (2)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";

            Medio++;
        }
        else if(data.sp[i].riesgo == "Bajo (1)"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";

            Bajo++;
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

    for (var i = 0; i < data.sp.length; i++){
        var row = "<tr>";
        row += "<td><strong>" + data.sp[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data.sp[i].proyecto + "</strong> ";
        if(data.sp[i].categoria == "Debilidad de Control ( DC )"){
            row += "<td>" + 1 + "</td>";
            row += "<td>" + 0 + "</td>";
            Debilidad++;
            
        }
        else if(data.sp[i].categoria == "Incumplimiento ( I )"){
            row += "<td>" + 0 + "</td>";
            row += "<td>" + 1 + "</td>";
            Incumplimiento++;
        }
        $("#tableBodyPrueba").append(row);
    }
        

    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[0].data.pop();

    myChart.data.datasets[0].data[0] = Alto;
    myChart.data.datasets[0].data[1] = Moderado;
    myChart.data.datasets[0].data[2] = Medio;
    myChart.data.datasets[0].data[3] = Bajo;


    myChart2.data.datasets[0].data.pop();
    myChart2.data.datasets[0].data.pop();

    myChart2.data.datasets[0].data[0] = Debilidad;
    myChart2.data.datasets[0].data[1] = Incumplimiento;

    myChart.update();
    myChart2.update();
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

    let horaImprimible = hora + " : " + minuto +  "&nbsp;"+ prepend;

    //salida
    document.getElementById('horaDocumento').innerHTML = horaImprimible;

  

  

////////////////////////////////////////////////////////////////////////////////

var ctx = document.getElementById('myChartRiesgo').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alto', 'Moderado', 'Medio', 'Bajo'],
        datasets: [{
            label: 'Riesgo',
            data: [Alto, Moderado, Medio, Bajo],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        
    }
    
});


var ctx = document.getElementById('myChartIncidencia').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Debilidad de Control (DB)', 'Incumplimiento (I)'],
        datasets: [{
            label: 'Categoria',
            data: [Debilidad,Incumplimiento],
            backgroundColor: [
                'red',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
                'red',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



///////////////////////////////////////////////////////////////////////////////////
//PDF Excel
$(document).ready(function() {
    $("#btn-Excel").click(function(e) {

        var a = document.createElement("a");
        //getting data from our div that contains the HTML table
        var table_div = document.getElementById("ExportarData");

        var table_html = table_div.outerHTML.replace(/ /g, "%20");

        while (table_html.indexOf('á') != -1) table_html = table_html.replace('á', '&aacute;');
        while (table_html.indexOf('Á') != -1) table_html = table_html.replace('Á', '&Aacute;');
        while (table_html.indexOf('é') != -1) table_html = table_html.replace('é', '&eacute;');
        while (table_html.indexOf('É') != -1) table_html = table_html.replace('É', '&Eacute;');
        while (table_html.indexOf('í') != -1) table_html = table_html.replace('í', '&iacute;');
        while (table_html.indexOf('Í') != -1) table_html = table_html.replace('Í', '&Iacute;');
        while (table_html.indexOf('ó') != -1) table_html = table_html.replace('ó', '&oacute;');
        while (table_html.indexOf('Ó') != -1) table_html = table_html.replace('Ó', '&Oacute;');
        while (table_html.indexOf('ú') != -1) table_html = table_html.replace('ú', '&uacute;');
        while (table_html.indexOf('Ú') != -1) table_html = table_html.replace('Ú', '&Uacute;');
        while (table_html.indexOf('º') != -1) table_html = table_html.replace('º', '&ordm;');
        while (table_html.indexOf('ñ') != -1) table_html = table_html.replace('ñ', '&ntilde;');
        while (table_html.indexOf('Ñ') != -1) table_html = table_html.replace('Ñ', '&Ntilde;');
        var data_type = "data:application/vnd.ms-excel," + encodeURIComponent(table_div);
        a.href = data_type + ", " + table_html;
        //setting the file name
        a.download = "Incidencia.xls";
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        e.preventDefault();
    });
});

window.onload = function(){
    document.getElementById("btn-PDF")
    .addEventListener("click",()=>{
        const invoice = this.document.getElementById("ExportarData");
        console.log(invoice);
        console.log(window);
        var opt = {
            filename: 'Incidencia.pdf',
             image: { type: 'jpeg', quality: 600 },
             html2canvas: { scale: 3 },
             jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape'}
            };
            html2pdf().from(invoice).set(opt).save();
    })
}
 
