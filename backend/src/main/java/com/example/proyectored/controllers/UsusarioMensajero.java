package com.example.proyectored.controllers;

import com.example.proyectored.models.MensajeroMod;

import com.example.proyectored.services.MensajeroServi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/Mensajero")
@CrossOrigin("*")
public class UsusarioMensajero {
    @Autowired
    private MensajeroServi mensajeroServi;

    @GetMapping
    public ArrayList<MensajeroMod> getMensajero(){
        return this.mensajeroServi.getMensajero();

    }
    @RequestMapping("/Crear")
    @PostMapping
    public MensajeroMod  saveUsuario(@RequestBody MensajeroMod Mensajero){

        return this.mensajeroServi.saveMensajero(Mensajero);

    }

    @GetMapping(path = "/{id}")
    public Optional<MensajeroMod> geId(@PathVariable Long id){
        return this.mensajeroServi.getIdMensajero(id);

    }
    @PutMapping(path = "/Modificar/{id}")
    public MensajeroMod updateMensajeroContr(@RequestBody MensajeroMod request, @PathVariable Long id){
        return this.mensajeroServi.updateMensajeroContr(request, id);
    }

    @DeleteMapping(path ="/Eliminar/{id}")
    public String  DeleteMensajero(@PathVariable  Long id){
        boolean ok= this.mensajeroServi.DeleteMensajero(id);
        if(ok){
            return "Usuario " + id + "eliminado";
        }else {
            return "Error en la eliminacion";
        }
    }

}
