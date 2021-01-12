$(document).ready(function() {
    $.getJSON("https://jsonplaceholder.typicode.com/comments", function(data) {

        console.log(data);
        var items = [];
        for (var i = 0; i < data.length; i++) {
            items.push(data[i]);
        }
        var employee_data = '';
        $.each(items, function(key, value) {
            employee_data += '<tr>';
            employee_data += '<td>' + value.postId + '</td>';
            employee_data += '<td>' + value.id + '</td>';
            employee_data += '<td>' + value.name + '</td>';
            employee_data += '<td>' + value.email + '</td>';
            employee_data += '<td>' + value.body + '</td>';
            employee_data += '</tr>';


        });
        $('#contenido').append(employee_data);
    });
});

const $btnExportar = document.querySelector("#btnExportarPendiente"),
    $tabla = document.querySelector("#contenido");

$btnExportar.addEventListener("click", function() {
    let tableExport = new TableExport($tabla, {
        exportButtons: false, // No queremos botones
        filename: "TeamMate Pendiente", //Nombre del archivo de Excel
        sheetname: "TeamMate Pendiente", //Título de la hoja
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.tabla.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});

// Backup
// $(document).ready(function() {
//     $.getJSON("https://jsonplaceholder.typicode.com/comments", function(data) {
//         console.log(data);
//         var items = [];
//         for (var i = 0; i < data.length; i++) {
//             items.push(data[i]);
//         }
//         var employee_data = '';
//         $.each(items, function(key, value) {
//             employee_data += '<tr>';
//             employee_data += '<td>' + value.postId + '</td>';
//             employee_data += '<td>' + value.id + '</td>';
//             employee_data += '<td>' + value.name + '</td>';
//             employee_data += '<td>' + value.email + '</td>';
//             employee_data += '<td>' + value.body + '</td>';
//             employee_data += '</tr>';


//         });
//         $('#contenido').append(employee_data);

//     });

// });


// $(document).ready(function() {
//     $('#contenido').click(function {

//     });
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/comments',
//         type: "get",
//         dataType: "json",

//         success: function(data) {
//             var json = data;
//             drawTable(json);
//             console.log
//         }
//     });


//     function drawTable(data) {
//         for (var i = 0; i < data.length; i++) {
//             drawRow(data[i]);
//         }
//     }

//     function drawRow(rowData) {
//         var row = $("<tr>")
//         row.append($("<td>" + rowData.postId + "</td>"));
//         row.append($("<td>" + rowData.id + "</td>"));
//         row.append($("<td>" + rowData.name + "</td>"));
//         row.append($("<td>" + rowData.email + "</td>"));
//         row.append($("<td>" + rowData.body + "</td>"));
//         $("#contenido").append(row);
//     }

// });