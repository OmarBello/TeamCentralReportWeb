$( document ).ready(function() {
    $.getJSON("http://172.17.50.98:90/api/Recomendaciones/Pendiente", function(data){ 
        console.log(data)
        var items = [];
        for(var i=0; i<data.length; i++){
            items.push(JSON.parse(data[i]))
        }
        var employee_data = '';
         $.each(items, function(key, value){
             employee_data += '<tr>';
             employee_data += '<td>'+value.codigo+'</td>';
             employee_data += '<td>'+value.proyecto+'</td>';
             employee_data += '<td>'+value.titulo+'</td>';
             employee_data += '</tr>';
   
   
         });
         $('#contenido').append(employee_data);    
   
      });
   
     });

// $.ajax({
//     url: 'http://172.17.50.98:90/api/Recomendaciones/Pendiente',
//     type: "get",
//     dataType: "json",
   
//     success: function(data) {
//         var json = JSON.parse(data);
//         drawTable(json);
//         console.log
//     }
// });


// function drawTable(data) {
//     for (var i = 0; i < data.length; i++) {
//         drawRow(data[i]);
//     }
// }

// function drawRow(rowData) {
//     var row = $("<tr>")
//     $("#personDataTable").append(row); 
//     row.append($("<td>" + rowData.codigo + "</td>"));
//     row.append($("<td>" + rowData.proyecto + "</td>"));
//     row.append($("<td>" + rowData.titulo + "</td>"));
//     row.append($("<td>" + rowData.estado + "</td>"));
// }