package com.example.proyectored.services;

import com.example.proyectored.models.MensajeroMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.MensajeroRepositorio;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class MensajeroServi {
    @Autowired
    MensajeroRepositorio MensajeroRepo;

    public ArrayList<MensajeroMod> getMensajero(){
        return (ArrayList<MensajeroMod>) MensajeroRepo.findAll();

    }

    public  MensajeroMod saveMensajero(MensajeroMod Mensajero){
        return MensajeroRepo.save(Mensajero);

    }

    public Optional<MensajeroMod> getIdMensajero(Long id){
        return MensajeroRepo.findById(id);


    }

    public MensajeroMod updateMensajeroContr(MensajeroMod request, Long id){
        MensajeroMod   user = MensajeroRepo.findById(id).get();
        user.setNombre(request.getNombre());
        return user;

    }
   public Boolean DeleteMensajero(Long id){
        try{
            MensajeroRepo.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
