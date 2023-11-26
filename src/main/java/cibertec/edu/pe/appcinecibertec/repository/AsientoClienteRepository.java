package cibertec.edu.pe.appcinecibertec.repository;

import cibertec.edu.pe.appcinecibertec.model.bd.AsientoCliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsientoClienteRepository extends JpaRepository<AsientoCliente, Integer> {
}
