package cibertec.edu.pe.appcinecibertec.controller.administracion;

import cibertec.edu.pe.appcinecibertec.model.bd.Estado;
import cibertec.edu.pe.appcinecibertec.model.bd.Sala;

import cibertec.edu.pe.appcinecibertec.model.dto.SalaDto;
import cibertec.edu.pe.appcinecibertec.model.response.ResultadoResponse;
import cibertec.edu.pe.appcinecibertec.service.SalaService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/administracion/sala")
public class SalaController {

    private SalaService salaService;

    @GetMapping("/listar")
    @ResponseBody
    public List<Sala> listarSalas(){
        return salaService.listarSalas();
    }

    @GetMapping("/frmsala")
    public String index (Model model){
        model.addAttribute("listarsalas",
                salaService.listarSalas());
        return "administracion/frmsala";
    }

    @PostMapping("/registrar")
    @ResponseBody
    public ResultadoResponse registrarSalas(
            @RequestBody SalaDto objSalas){
        return salaService.registrarActualizarSala(objSalas);
    }
}