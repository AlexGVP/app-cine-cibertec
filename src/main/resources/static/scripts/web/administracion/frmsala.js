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

$(document).on("click", ".btnactualizar", function(){
    $("#modalsala").modal("show");
    $("#txtdescripcion").val($(this).attr("data-descsala"));
    $("#txtasientos").val($(this).attr("data-asientos"));
    $("#cboestado").empty($(this).attr("data-idestado"));
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
    $("#hddidestado").val($(this).attr("data-idsala"));
});