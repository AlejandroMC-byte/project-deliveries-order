package com.example.proyectored.repositories;

import com.example.proyectored.models.MensajeroMod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensajeroRepositorio extends JpaRepository<MensajeroMod, Long> {
}
