package cibertec.edu.pe.appcinecibertec.model.bd;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "asientocliente")

public class AsientoCliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idacliente;
    @Column(name = "idrasiento")
    private String idrasiento;
    @Column(name = "idcliente")
    private String idcliente;
}