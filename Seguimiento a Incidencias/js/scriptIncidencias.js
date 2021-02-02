$(document).ready(function(){
   $("#btnVisualizar").click(function(e){
      if('#Incidencias == ADMINISTRACION Y FINANZAS' && '#chIncidencias == #flexRadioDefault1'){
         $.getJSON("https://localhost:44372/api/AdministracionFinanzas/AdministracionFinanzas",function(data){
            console.log(data);
            var items = [];
            for (var i = 0; i < data.sp.length; i++){
               items.push(data.sp[i]);
            }
            var incidencia_data = '';
            $.each(items, function(key, value){
               incidencia_data += '<tr>';
               incidencia_data += '<td>' + value.codigo + +value.proyecto+'</td><br>'; 
               incidencia_data += '</tr>';
            });
            $.each(items, function(key, value){
               incidencia_data += '<tr>';
               incidencia_data += '<td>' + value.categoria +'</td>'; 
               incidencia_data += '<td>' + value.riesgo +'</td>'; 
               incidencia_data += '</tr>';
            });
            $('#Principal').append(incidencia_data);
            $('#Secundario').append(incidencia_data);
         });
      }
   });
});