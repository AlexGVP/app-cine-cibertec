package cibertec.edu.pe.appcinecibertec.service;

import cibertec.edu.pe.appcinecibertec.model.bd.Estado;
import cibertec.edu.pe.appcinecibertec.model.response.ResultadoResponse;
import cibertec.edu.pe.appcinecibertec.repository.EstadoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EstadoService {

    private EstadoRepository estadoRepository;

    public List<Estado> listaEstado(){
        return estadoRepository.findAll();
    }

    public ResultadoResponse registrarEstado(Estado estado){
        Estado nuevoEstado = new Estado();
        if(estado.getIdestado()>0){
            nuevoEstado.setIdestado(estado.getIdestado());
        }
        nuevoEstado.setDescestado(estado.getDescestado());
        String mensaje ="Estado registrado";
        Boolean respuesta = true;
        try{
            estadoRepository.save(nuevoEstado);
        }catch (Exception ex){
            mensaje ="Estado NO registrado";
            respuesta=false;
        }
        return ResultadoResponse.builder().respuesta(respuesta)
                .mensaje(mensaje).build();
    }

    public ResultadoResponse eliminarEstado(Integer idestado){
        String mensaje = "Estado eliminado";
        boolean respuesta = true;
        try {
            estadoRepository.deleteById(idestado);
        } catch (Exception ex){
            mensaje="Estado NO eliminado";
            respuesta=false;
        }
        return ResultadoResponse.builder().respuesta(respuesta)
                .mensaje(mensaje).build();
    }

    public List<Estado> listarEstado() {
        return null;
    }
}
