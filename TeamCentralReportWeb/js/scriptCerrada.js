$(document).ready(function() {
    $.getJSON("https://localhost:44372/api/Recomendaciones/Cerradas",function(data) {
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
        a.download = "Cerradas.xls";
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        e.preventDefault();
    });
});