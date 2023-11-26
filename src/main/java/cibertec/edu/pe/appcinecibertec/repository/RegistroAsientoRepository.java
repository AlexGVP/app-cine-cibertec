package cibertec.edu.pe.appcinecibertec.repository;

import cibertec.edu.pe.appcinecibertec.model.bd.RegistroAsiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RegistroAsientoRepository extends JpaRepository<RegistroAsiento, Integer> {

    @Transactional
    @Modifying
    @Query(value = "{call spRegistrarAsiento(:idregistro, :idasiento)}", nativeQuery = true)
    void  registrarAsiento(Integer idRegistro, Integer idasiento);
}
