package com.example.proyectored.repositories;

import com.example.proyectored.models.SucursalesMod;
import com.example.proyectored.models.UsuarioMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SucursalesRepositorio extends JpaRepository<SucursalesMod, Long> {
}
