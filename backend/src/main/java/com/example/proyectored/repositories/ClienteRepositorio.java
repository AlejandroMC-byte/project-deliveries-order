package com.example.proyectored.repositories;

import ch.qos.logback.core.net.server.Client;
import com.example.proyectored.models.ClienteMod;
import com.example.proyectored.models.PedidoMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepositorio extends JpaRepository<ClienteMod, Long> {
}
