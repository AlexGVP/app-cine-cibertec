package cibertec.edu.pe.appcinecibertec.model.bd;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "registroasiento")

public class RegistroAsiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idrasiento;
    @Column(name = "idcartelera")
    private String idcartelera;
    @Column(name = "nroasiento")
    private String nroasiento;
}