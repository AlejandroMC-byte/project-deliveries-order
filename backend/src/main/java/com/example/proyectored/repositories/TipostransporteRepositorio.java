package com.example.proyectored.repositories;

import com.example.proyectored.models.TipotransporteMod;
import com.example.proyectored.models.UsuarioMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipostransporteRepositorio extends JpaRepository<TipotransporteMod, Long> {
}
