package cibertec.edu.pe.appcinecibertec.service;

import cibertec.edu.pe.appcinecibertec.model.bd.Estado;
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

    public boolean registrarEstado(Estado estado){
        return estadoRepository.save(estado) != null;
    }

    public void eliminarEstado(Integer idestado){
        estadoRepository.deleteById(idestado);
    }
}
