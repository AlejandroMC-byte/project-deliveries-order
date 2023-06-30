package com.example.proyectored.services;

import com.example.proyectored.models.SucursalesMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.SucursalesRepositorio;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class SucursalesServi {
    @Autowired
    SucursalesRepositorio sucuralesrepo;

    public ArrayList<SucursalesMod> getSucursales(){
        return (ArrayList<SucursalesMod>) sucuralesrepo.findAll();

    }

    public  SucursalesMod saveSucursales(SucursalesMod sucursales){
        return sucuralesrepo.save(sucursales);

    }

    public Optional<SucursalesMod> getIdSucursales(Long id){
        return sucuralesrepo.findById(id);


    }

    public SucursalesMod updateSucursalesContr(SucursalesMod request, Long id){
        SucursalesMod   user = sucuralesrepo.findById(id).get();
        user.setNombre(request.getNombre());
        return user;

    }
   public Boolean DeleteSucursales(Long id){
        try{
            sucuralesrepo.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
