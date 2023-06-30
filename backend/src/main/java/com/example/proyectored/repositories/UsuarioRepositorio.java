package com.example.proyectored.repositories;

import com.example.proyectored.models.UsuarioMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UsuarioRepositorio extends JpaRepository<UsuarioMod, Long> {
}
