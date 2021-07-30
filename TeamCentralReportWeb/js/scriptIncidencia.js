let Alto = 0;
let Moderado = 0;
let Medio = 0;
let Bajo = 0;
let Debilidad = 0;
let Incumplimiento = 0;
let Oportunidad = 0;

function TraerData() {
    var entidad = $("#selectNombre :selected").val();
    // var estatus = $("input[name=radioIncidencia]:checked").val();
    var estatus = 'Vencida'
    $.getJSON({
        url: 'https://172.17.50.98/api/Recomendaciones/GetAllIncidenciaVencerPorVencer?entidad='+entidad+
        '&estatus='+estatus,
        type: 'GET',
        success: function (data) {
            FillTable(data);
            console.log(data);
            // document.getElementById('Estatus').innerHTML = estatus;
            // document.getElementById('TituloIncidencia').innerHTML = entidad;
        }
    });

    $.getJSON({
        url: 'https://172.17.50.98/api/Recomendaciones/GetAllIncidencia?entidad='+entidad+
        '&estatus='+estatus,
        type: 'GET',
        success: function (data2) {
            FillTable2(data2);
            console.log(data2);
            //document.getElementById('Estatus').innerHTML = estatus;
            document.getElementById('TituloIncidencia').innerHTML = entidad;
        }
    });

    

}

function TraerDataRefresh(){
    location.reload();
}

function FillTable(data){
    
    console.log(data);
    for (var i = 0; i < data.sp.length; i ++){
        var row = "<tr>";
            row += "<td><strong>" + data.sp[i].projectcode +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data.sp[i].proyecto + "</strong> </br>" + data.sp[i].categoria  +"</td>";
            row += "<td> &nbsp;&nbsp;&nbsp;" + data.sp[i].alto + "</td>";
            row += "<td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp[i].moderado  + "</td>";
            row += "<td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp[i].medio + "</td>";
            row += "<td> &nbsp;&nbsp;&nbsp;" + data.sp[i].bajo + "</td>";

        row += "</tr>";

        $("#tableBody").append(row);
        
     
    }

}

function FillTable2(data2){

    Alto = 0;
    Moderado = 0;
    Medio = 0;
    Bajo = 0;
    Debilidad = 0;
    Incumplimiento = 0;

    document.getElementById('tableBody').innerHTML = '';
   document.getElementById('tablebodySecundario').innerHTML = '';
   document.getElementById('CantidadAlto').innerHTML = '';
   document.getElementById('CantidadModerado').innerHTML = '';
   document.getElementById('CantidadMedio').innerHTML = '';
   document.getElementById('CantidadBajo').innerHTML = '';
   document.getElementById('CantidadDB').innerHTML = '';
   document.getElementById('CantidadI').innerHTML = '';
   document.getElementById('CantidadOM').innerHTML = '';
   

    for (var i = 0; i < data2.sp2.length; i++){
        var row = "<tr>";
        row += "<td><strong>" + data2.sp2[i].projectcode +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data2.sp2[i].nombre_Proyecto + "</strong> &nbsp;&nbsp; </br>" + data2.sp2[i].titulo +"</td>";
        row += "<td>" +data2.sp2[i].riesgo+"</td>";
        row += "<td>" +data2.sp2[i].categoria2+"</td>";
        row += "<td>" +data2.sp2[i].nombre+"</td>";
        row += "<td>" +data2.sp2[i].fecha_Estimada+"</td>";
        row += "<td>" +data2.sp2[i].día_Atraso+"</td>";
        row += "</tr>"

   

        $("#tablebodySecundario").append(row);
        document.getElementById('CantidadIncidencia').innerHTML = data2.sp2.length;
        
    
    }

       

   
  
   
        for (var i = 0; i < data2.sp2.length; i++){
       var row = "<tr>";
       row += "<td><strong>" + data2.sp2[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data2.sp2[i].proyecto + "</strong> ";
       if(data2.sp2[i].categoria == "Debilidad de Control ( DC )"){
           row += "<td>" + 1 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           Debilidad++;
           document.getElementById('CantidadDB').innerHTML =  Debilidad;
           
       }
       else if(data2.sp2[i].categoria == "Incumplimiento ( I )"){
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 1 + "</td>";
           row += "<td>" + 0 + "</td>";
           Incumplimiento++;
           document.getElementById('CantidadI').innerHTML = Incumplimiento;
       }
       else if(data2.sp2[i].categoria == "Oportunidad de Mejora ( OM )"){
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 1 + "</td>";
           Oportunidad++;
           document.getElementById('CantidadOM').innerHTML = Oportunidad;
       }
       $("#TableBodyHidden").append(row);
   }

   for (var i = 0; i < data2.sp2.length; i ++){
       var row = "<tr>";
           row += "<td><strong>" + data2.sp2[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data2.sp2[i].proyecto + "</strong> <br />" + data2.sp2[i].categoria  +"</td>";

       
       if(data2.sp2[i].riesgo == "Alto (4)"){
           row += "<td>" + 1 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";

            Alto++;
            document.getElementById('CantidadAlto').innerHTML = Alto;
       }
       else if(data2.sp2[i].riesgo == "Moderado (3)"){
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 1 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";

          Moderado++;
          document.getElementById('CantidadModerado').innerHTML = Moderado;
       }
       else if(data2.sp2[i].riesgo == "Medio (2)"){
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 1 + "</td>";
           row += "<td>" + 0 + "</td>";

           Medio++; 
           document.getElementById('CantidadMedio').innerHTML = Medio;
       }
       else if(data2.sp2[i].riesgo == "Bajo (1)"){
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 0 + "</td>";
           row += "<td>" + 1 + "</td>";

            Bajo++;
            document.getElementById('CantidadBajo').innerHTML = Bajo;
       }


       row += "</tr>";

       $("#TableBodyHidden2").append(row);
    
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
     myChart2.data.datasets[0].data.pop();

     myChart2.data.datasets[0].data[0] = Debilidad;
     myChart2.data.datasets[0].data[1] = Incumplimiento;
     myChart2.data.datasets[0].data[2] = Oportunidad;

   myChart.update();
    myChart2.update();
  
    
}


// function FillTable3(data3){

//     Alto = 0;
//     Moderado = 0;
//     Medio = 0;
//     Bajo = 0;
//     Debilidad = 0;
//     Incumplimiento = 0;

//     document.getElementById('tableBody').innerHTML = '';
//    document.getElementById('tablebodySecundario').innerHTML = '';
//    document.getElementById('CantidadAlto').innerHTML = '';
//    document.getElementById('CantidadModerado').innerHTML = '';
//    document.getElementById('CantidadMedio').innerHTML = '';
//    document.getElementById('CantidadBajo').innerHTML = '';
//    document.getElementById('CantidadDB').innerHTML = '';
//    document.getElementById('CantidadI').innerHTML = '';
//    document.getElementById('CantidadOM').innerHTML = '';
   

//     for (var i = 0; i < data3.sp2.length; i++){
//         var row = "<tr>";
//         row += "<td><strong>" + data3.sp2[i].projectcode +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data3.sp2[i].nombre_Proyecto + "</strong> &nbsp;&nbsp; </br>" + data3.sp2[i].titulo +"</td>";
//         row += "<td>" +data3.sp2[i].riesgo+"</td>";
//         row += "<td>" +data3.sp2[i].categoria2+"</td>";
//         row += "<td>" +data3.sp2[i].nombre+"</td>";
//         row += "<td>" +data3.sp2[i].fecha_Estimada+"</td>";
       
//         row += "</tr>"

   

//         $("#tablebodySecundario").append(row);
//         document.getElementById('CantidadIncidencia').innerHTML = data3.sp2.length;
        
    
//     }

       

   
  
   
//         for (var i = 0; i < data3.sp2.length; i++){
//        var row = "<tr>";
//        row += "<td><strong>" + data3.sp2[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data3.sp2[i].proyecto + "</strong> ";
//        if(data3.sp2[i].categoria == "Debilidad de Control ( DC )"){
//            row += "<td>" + 1 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            Debilidad++;
//            document.getElementById('CantidadDB').innerHTML =  Debilidad;
           
//        }
//        else if(data3.sp2[i].categoria == "Incumplimiento ( I )"){
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 1 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            Incumplimiento++;
//            document.getElementById('CantidadI').innerHTML = Incumplimiento;
//        }
//        else if(data3.sp2[i].categoria == "Oportunidad de Mejora ( OM )"){
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 1 + "</td>";
//            Oportunidad++;
//            document.getElementById('CantidadOM').innerHTML = Oportunidad;
//        }
//        $("#TableBodyHidden").append(row);
//    }

//    for (var i = 0; i < data3.sp2.length; i ++){
//        var row = "<tr>";
//            row += "<td><strong>" + data3.sp2[i].codigo +"</strong> &nbsp;&nbsp;&nbsp; <strong>"+ data3.sp2[i].proyecto + "</strong> <br />" + data3.sp2[i].categoria  +"</td>";

       
//        if(data3.sp2[i].riesgo == "Alto (4)"){
//            row += "<td>" + 1 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";

//             Alto++;
//             document.getElementById('CantidadAlto').innerHTML = Alto;
//        }
//        else if(data3.sp2[i].riesgo == "Moderado (3)"){
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 1 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";

//           Moderado++;
//           document.getElementById('CantidadModerado').innerHTML = Moderado;
//        }
//        else if(data3.sp2[i].riesgo == "Medio (2)"){
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 1 + "</td>";
//            row += "<td>" + 0 + "</td>";

//            Medio++; 
//            document.getElementById('CantidadMedio').innerHTML = Medio;
//        }
//        else if(data3.sp2[i].riesgo == "Bajo (1)"){
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 0 + "</td>";
//            row += "<td>" + 1 + "</td>";

//             Bajo++;
//             document.getElementById('CantidadBajo').innerHTML = Bajo;
//        }


//        row += "</tr>";

//        $("#TableBodyHidden2").append(row);
    
//    }

//    myChart.data.datasets[0].data.pop();
//    myChart.data.datasets[0].data.pop();
//    myChart.data.datasets[0].data.pop();
//    myChart.data.datasets[0].data.pop();

//    myChart.data.datasets[0].data[0] = Alto;
//    myChart.data.datasets[0].data[1] = Moderado;
//    myChart.data.datasets[0].data[2] = Medio;
//    myChart.data.datasets[0].data[3] = Bajo;


//      myChart2.data.datasets[0].data.pop();
//      myChart2.data.datasets[0].data.pop();
//      myChart2.data.datasets[0].data.pop();

//      myChart2.data.datasets[0].data[0] = Debilidad;
//      myChart2.data.datasets[0].data[1] = Incumplimiento;
//      myChart2.data.datasets[0].data[2] = Oportunidad;

//    myChart.update();
//     myChart2.update();
  
    
// }

// ////////////////////////////////////////////////////////////////////////////////
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

  

  

// ////////////////////////////////////////////////////////////////////////////////

var ctx = document.getElementById('myChartRiesgo').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Alto', 'Moderado', 'Medio', 'Bajo'],
        datasets: [{
            label: 'Riesgo',
            data: [Alto, Moderado, Medio, Bajo],
            backgroundColor: [
                '#ff5f52',
                '#ffb04c',
                '#ffff5a',
                '#9cff57'
            ],
            borderColor: [
                '#ff5f52',
                '#ffb04c',
                '#ffff5a',
                '#9cff57'
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
    type: 'pie',
    data: {
        labels: ['(DC)', '(I)','( OM )'],
        datasets: [{
            label: 'Categoria',
            data: [Debilidad,Incumplimiento,Oportunidad],
            backgroundColor: [
                '#ffb04c',
                '#ff5f52',
                '#9cff57'
            ],
            borderColor: [
                '#ffb04c',
                '#ff5f52',
                '#9cff57'
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



// ///////////////////////////////////////////////////////////////////////////////////
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




// window.onload = function(){
//     document.getElementById("btn-PDF")
//     .addEventListener("click",()=>{
//         const invoice = this.document.getElementById("ExportarData");
//         console.log(invoice);
//         console.log(window);
//         var opt = {
//             filename: 'Incidencia.pdf',
//              image: { type: 'PNG'},
//              html2canvas: { scale: 2 },
//              jsPDF: { unit: 'in', format: 'a4', orientation: 'l'}
//             };
//             html2pdf().from(invoice).set(opt).save();
//     })
// }

// function HTMLtoPDF(){
//     var doc = new jsPDF()

//     var HTMLElement = $("#ExportarData").html()
//     doc.fromHTML(HTMLElement,10,10,{
//         'width':190
        
//     })
//     doc.save('Incidencia.pdf')
// }



$('#btn-PDF').click(function(){
      $('#ExportarData').printThis({
          debug: false,
          importCSS: true,
          importStyle: false,
          loadCSS:"http://127.0.0.1:5500/Incidencias.html/styles.css",
          //array []
          pageTitle: "",
          removeInline: false,
          printDelay: 333,
          header: null,
          footer: null,
          formValues: true,
          canvas: true,
          base: false,
          doctypeStrings: '<!DOCTYPE html>',
          removeScripts: false,
          copyTagClasses: false,
      });
});

