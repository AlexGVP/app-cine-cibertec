$(document).on("click", "#btnnuevo", function(){
    $("#modalestado").modal("show");
    $("#txtdescripcion").val("");
    $("#hddidestado").val("0");
});

$(document).on("click", ".btnactualizar", function(){
    $("#modalestado").modal("show");
    $("#txtdescripcion").val($(this).attr("data-descestado"));
    $("#hddidestado").val($(this).attr("data-idestado"));
});

$(document).on("click", ".btneliminar", function(){
    $("#modalestado").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
    type:"POST",
    contentType:"application/json",
    url:"/administracion/estado/registrar",
    data: JSON.stringify({
        idestado:$("#hddidestado").val(),
        descestado:$("#txtdescripcion").val()
    }),
    success: function(resultado){
    if(resultado.respuesta){
        listar();
        }
    alert(resultado.mensaje);
    $("#modalestado").modal("hide")
    }
    });
});

$(document).on("click", ".btneliminar", function(){
})
function listar(){
console.log("Informacion");
 $.ajax({
         type: "GET",
         url: "/administracion/estado/listar",
         dataType: "json",
         success: function(resultado){
                 console.log(resultado);
                 $("#tblestado > tbody").html("");
                /*$.each(resultado, function(index, value){
        $("#tblestado > tbody").append("<tr>" +
        "<td>"+value.idestado+"</td>"+
        "<td>"+value.descestado+"</td>"+
        "<td>"+
        "<button type='button' class='btn btn-outline-success btnactualizar'"+
        "                            data-idestado='"+value.idestado+"'"+
        "                            data-descestado='"+value.descestado+"'>"+
        "<i class='bi bi-arrow-clockwise'></i>"+
        "                   </button>"+
        "                   </td>"+
        "<td >"+
        "                   <button type='button' class='btn btn-outline-danger btneliminar'"+
        "                            data-idestado='"+value.idestado+"'"+
        "                           data-descestado='"+value.descestado+"'>"+
        "                        <i class='bi bi-trash'></i>"+
        "                    </button>"+
        "                </td>"+
        "</tr>")
        })*/
        }

  })
}

function listarEstados(){

    $.ajax({
        type:"GET",
        url:"/administracion/estado/listar",
        dataType:"json",
        success: function(resultado){
        console.log(resultado);
        $("#tblestado > tbody").html("");
        $.each(resultado, function(index, value){
        $("#tblestado > tbody").append("<tr>" +
        "<td>"+value.idestado+"</td>"+
        "<td>"+value.descestado+"</td>"+
        "<td>"+
        "<button type='button' class='btn btn-outline-success btnactualizar'"+
        "                            data-idestado='"+value.idestado+"'"+
        "                            data-descestado='"+value.descestado+"'>"+
        "<i class='bi bi-arrow-clockwise'></i>"+
        "                   </button>"+
        "                   </td>"+
        "<td >"+
        "                   <button type='button' class='btn btn-outline-danger btneliminar'"+
        "                            data-idestado='"+value.idestado+"'"+
        "                           data-descestado='"+value.descestado+"'>"+
        "                        <i class='bi bi-trash'></i>"+
        "                    </button>"+
        "                </td>"+
        "</tr>")
        })
        }
  })
}