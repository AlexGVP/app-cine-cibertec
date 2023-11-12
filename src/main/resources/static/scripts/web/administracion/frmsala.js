$(document).on("click", "#btnnuevo", function(){
    $("#txtdescripcion").val("");
    $("#txtasientos").val("");
    $("#cboestado").empty();
    $("#hddidsala").val("0");
    $.ajax({
                type: "GET",
                url: "/administracion/estado/listar",
                dataType: "json",
                success: function(resultado){
                    $.each(resultado, function(index, value){
                    $("#cboestado").append(
                    `<option value="${value.idestado}">${value.descestado}</option>`)
                    });
                }
            });
    $("#modalsala").modal("show");
});