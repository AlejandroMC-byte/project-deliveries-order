package com.example.proyectored.services;

import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UsuarioServi {
    @Autowired
    UsuarioRepositorio UsuarioRepo;

    public ArrayList<UsuarioMod> getUsuario(){
        return (ArrayList<UsuarioMod>) UsuarioRepo.findAll();

    }

    public  UsuarioMod saveUSuario(UsuarioMod usuario){
        return UsuarioRepo.save(usuario);

    }

    public Optional<UsuarioMod> getId(Long id){
        return UsuarioRepo.findById(id);


    }

    public UsuarioMod updateUsuarioContr(UsuarioMod request, Long id){
        UsuarioMod   user = UsuarioRepo.findById(id).get();
        user.setPassword(request.getPassword());
        return user;

    }
   public Boolean DeleteUSuario(Long id){
        try{
            UsuarioRepo.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
