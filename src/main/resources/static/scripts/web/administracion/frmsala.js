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
    $("#hddidsala").val($(this).attr("data-idsala"));
    $("#cboestado").empty();
    var idestado = $(this).attr("data-idestado");
    $.ajax({
                    type: "GET",
                    url: "/administracion/estado/listar",
                    dataType: "json",
                    success: function(resultado){
                        $.each(resultado, function(index, value){
                        $("#cboestado").append(
                        `<option value="${value.idestado}">${value.descestado}</option>`)
                        });
                        $("#cboestado").val(idestado);
                    }
                });
    $("#hddidestado").val($(this).attr("data-idsala"));
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/administracion/sala/registrar",
        data: JSON.stringify({
            idsala: $("#hddidsala").val(),
            descsala: $("#txtdescripcion").val(),
            asientos: $("#txtasientos").val(),
            idestado: $("#cboestado").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarSalas();
            }
            alert(resultado.mensaje);
            $("#modalsala").modal("hide")
        }
    })
});

function listarSalas(){
    $.ajax({
        type: "GET",
        url: "/administracion/sala/listar",
        dataType: "json",
        success: function(resultado){
            $("#tblsalas > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblsalas > tbody").append("<tr>" +
                    "<td>"+value.idsala+"</td>" +
                    "<td>"+value.descsala+"</td>" +
                    "<td>"+value.asientos+"</td>" +
                    "<td>"+value.estado.descestado+"</td>" +
                    "<td>"+
                    "<button type='button' class='btn btn-outline-success btnactualizar'"+
                    " data-idsala='"+value.idsala+"'"+
                    " data-descsala='"+value.descsala+"'"+
                    " data-asientos='"+value.asientos+"'"+
                    " data-idestado='"+value.estado.idestado+"'>"+
                    "<i class='bi bi-arrow-clockwise'></i>"+
                    "</button></td>"+
                    "</tr>");
            })
        }
    })
}