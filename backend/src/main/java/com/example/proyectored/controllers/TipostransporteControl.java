package com.example.proyectored.controllers;

import com.example.proyectored.models.TipotransporteMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.TipostransporteRepositorio;
import com.example.proyectored.services.TipostransporteServi;
import com.example.proyectored.services.UsuarioServi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/tipoTrans")
@CrossOrigin("*")
public class TipostransporteControl {
    @Autowired
    private TipostransporteServi tipostransporteServi;

    @GetMapping
    public ArrayList<TipotransporteMod> getTipotrans(){
        return this.tipostransporteServi.getTipostrans();

    }
    @RequestMapping("/Crear")
    @PostMapping
    public TipotransporteMod  saveTipotrans(@RequestBody TipotransporteMod tipotransporte){

        return this.tipostransporteServi.saveTipotrans(tipotransporte);

    }

    @GetMapping(path = "/{id}")
    public Optional<TipotransporteMod> geId(@PathVariable Long id){
        return this.tipostransporteServi.getIdTipostrans(id);

    }
    @PutMapping(path = "/Modificar/{id}")
    public TipotransporteMod updateTipotransContr(@RequestBody TipotransporteMod request, @PathVariable Long id){
        return this.tipostransporteServi.updateTipostransContr(request, id);
    }

    @DeleteMapping(path ="/Eliminar/{id}")
    public String  DeleteTipotrans(@PathVariable  Long id){
        boolean ok= this.tipostransporteServi.DeleteTipostrans(id);
        if(ok){
            return "Usuario " + id + "eliminado";
        }else {
            return "Error en la eliminacion";
        }
    }

}
