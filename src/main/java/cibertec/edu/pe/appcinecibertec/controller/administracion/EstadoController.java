package cibertec.edu.pe.appcinecibertec.controller.administracion;

import cibertec.edu.pe.appcinecibertec.service.EstadoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
}