package com.example.proyectored.services;

import com.example.proyectored.models.TipotransporteMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.TipostransporteRepositorio;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TipostransporteServi {
    @Autowired
    TipostransporteRepositorio tipostransporteRepo;

    public ArrayList<TipotransporteMod> getTipostrans(){
        return (ArrayList<TipotransporteMod>) tipostransporteRepo.findAll();

    }

    public  TipotransporteMod saveTipotrans(TipotransporteMod tipotransporte){
        return tipostransporteRepo.save(tipotransporte);

    }

    public Optional<TipotransporteMod> getIdTipostrans(Long id){
        return tipostransporteRepo.findById(id);


    }

    public TipotransporteMod updateTipostransContr(TipotransporteMod request, Long id){
        TipotransporteMod   user = tipostransporteRepo.findById(id).get();
        user.setNombre(request.getNombre());
        return user;

    }
   public Boolean DeleteTipostrans(Long id){
        try{
            tipostransporteRepo.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
