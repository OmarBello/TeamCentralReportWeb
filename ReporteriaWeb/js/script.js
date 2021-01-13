// $(document).ready(function() {
//     $.getJSON("https://172.17.50.98:443/api/Recomendaciones/Pendiente", function(data) {

//                  console.log(data);
//                 var items = [];
//                 for (var i = 0; i < data.length; i++) {
//                     items.push(data[i]);
//                 }
//                 var employee_data = '';
//                 $.each(items, function(key, value) {
//                     employee_data += '<tr>';
//                     employee_data += '<td>' + value.codigo + '</td>';
//                     employee_data += '<td>' + value.proyecto + '</td>';
//                     employee_data += '<td>' + value.titulo + '</td>';
//                     employee_data += '</tr>';
        
        
//                 });
//                 $('#contenido').append(employee_data);
        
//     });
// });

// const $btnExportar = document.querySelector("#btnExportarPendiente"),
//     $tabla = document.querySelector("#contenido");

// $btnExportar.addEventListener("click", function() {
//     let tableExport = new TableExport($tabla, {
//         exportButtons: false, // No queremos botones
//         filename: "TeamMate Pendiente", //Nombre del archivo de Excel
//         sheetname: "TeamMate Pendiente", //Título de la hoja
//     });
//     let datos = tableExport.getExportData();
//     let preferenciasDocumento = datos.tabla.xlsx;
//     tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
// });

// Backup
$(document).ready(function() {
    $.getJSON("https://172.17.50.98:443/api/Recomendaciones/Pendiente",function(data) {
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
            employee_data += '<td>' + value.fecha_Estimada + '</td>';
            employee_data += '<td>' + value.categoria + '</td>';
            employee_data += '<td>' + value.riesgo + '</td>';
            employee_data += '<td>' + value.responsable + '</td>';
            employee_data += '<td>' + value.estatus + '</td>';
            employee_data += '<td>' + value.coordinador + '</td>';
            employee_data += '<td>' + value.entidad + '</td>';
            employee_data += '<td>' + value.atraso + '</td>';
            employee_data += '<td>' + value.fecha_Envio + '</td>';
            employee_data += '<td>' + value.dominio + '</td>';
            employee_data += '</tr>';


        });
        $('#contenido').append(employee_data);

    });

});
// $("#btnExport").click(function(e) {

//     window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('#dvData').innerHTML()));

//     e.preventDefault();

// });


$(document).ready(function() {
    $("#btnExport").click(function(e) {

        var a = document.createElement("a");
        //getting data from our div that contains the HTML table
        var table_div = document.getElementById("dvData");

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
        a.download = "Pendiente.xls";
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        e.preventDefault();
    });
});
// $(document).ready(function() {
//     $.ajax({
//         url: 'https://172.17.50.98:443/api/Recomendaciones/Pendiente',
//         type: "get",
//         dataType: "json",

//         success: function(data) {
//             var json = data;
//             drawTable(json);
//             console.log(json)
//         }
//     });
//     function drawTable(data) {
//         for (var i = 0; i < data.length; i++) {
//             drawRow(data[i]);
//         }
//     }

//     function drawRow(rowData) {
//         var row = $("<tr>")
//         row.append($("<td>" + rowData.codigo + "</td>"));
//         row.append($("<td>" + rowData.proyecto + "</td>"));
//         $("#contenido").append(row);
//     }

// });
