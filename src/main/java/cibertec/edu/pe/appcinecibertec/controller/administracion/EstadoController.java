package cibertec.edu.pe.appcinecibertec.controller.administracion;

import cibertec.edu.pe.appcinecibertec.model.bd.Estado;
import cibertec.edu.pe.appcinecibertec.model.response.ResultadoResponse;
import cibertec.edu.pe.appcinecibertec.service.EstadoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/administracion/estado")

public class EstadoController {

    private EstadoService estadoService;

    @GetMapping("/frmestado")
    public String index (Model model){
        model.addAttribute("listaestado",
                estadoService.listaEstado());
        return "administracion/frmestado";
    }
    @PostMapping("/registrar")
    @ResponseBody
    public ResultadoResponse registrarEstado(
            @RequestBody Estado objEstado){
        return estadoService.registrarEstado(objEstado);
    }

    @DeleteMapping("/eliminar")
    @ResponseBody
    public ResultadoResponse eliminarEstado(
            @RequestBody Estado objEstado){
        return estadoService.eliminarEstado(objEstado.getIdestado());
    }

    @GetMapping("/listar")
    @ResponseBody
    public List<Estado> listarEstado(){
        return estadoService.listarEstados();
    }
}