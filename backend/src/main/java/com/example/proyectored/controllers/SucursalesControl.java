package com.example.proyectored.controllers;

import com.example.proyectored.models.SucursalesMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.services.SucursalesServi;
import com.example.proyectored.services.UsuarioServi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/sucursales")
@CrossOrigin("*")
public class SucursalesControl {
    @Autowired
    private SucursalesServi sucursalesServi;

    @GetMapping
    public ArrayList<SucursalesMod> getUsuarios(){
        return this.sucursalesServi.getSucursales();

    }
    @RequestMapping("/Crear")
    @PostMapping
    public SucursalesMod  saveSucursales(@RequestBody SucursalesMod sucursales){

        return this.sucursalesServi.saveSucursales(sucursales);

    }

    @GetMapping(path = "/{id}")
    public Optional<SucursalesMod> geIdSucursales(@PathVariable Long id){
        return this.sucursalesServi.getIdSucursales(id);

    }
    @PutMapping(path = "/Modificar/{id}")
    public SucursalesMod updateSucursalesContr(@RequestBody SucursalesMod request, @PathVariable Long id){
        return this.sucursalesServi.updateSucursalesContr(request, id);
    }

    @DeleteMapping(path ="/Eliminar/{id}")
    public String  DeleteSucursales(@PathVariable  Long id){
        boolean ok= this.sucursalesServi.DeleteSucursales(id);
        if(ok){
            return "Usuario " + id + "eliminado";
        }else {
            return "Error en la eliminacion";
        }
    }

}
