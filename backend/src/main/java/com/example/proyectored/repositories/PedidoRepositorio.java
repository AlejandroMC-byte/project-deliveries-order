package com.example.proyectored.repositories;

import com.example.proyectored.models.PedidoMod;
import com.example.proyectored.models.UsuarioMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepositorio extends JpaRepository<PedidoMod, Long> {
}
