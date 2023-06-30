package com.example.proyectored.controllers;

import com.example.proyectored.models.MensajeroMod;
import com.example.proyectored.models.PedidoMod;
import com.example.proyectored.services.MensajeroServi;
import com.example.proyectored.services.PedidoServi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/Pedido")
@CrossOrigin("*")
public class PedidoControl {
    @Autowired
    private PedidoServi PedidoServi;

    @GetMapping
    public ArrayList<PedidoMod> getPedido(){
        return this.PedidoServi.getPedido();

    }
    @RequestMapping("/Crear")
    @PostMapping
    public PedidoMod  savePedido(@RequestBody PedidoMod Pedido){

        return this.PedidoServi.savePedido(Pedido);

    }

    @GetMapping(path = "/{id}")
    public Optional<PedidoMod> geId(@PathVariable Long id){
        return this.PedidoServi.getIdPedido(id);

    }
    @PutMapping(path = "/Modificar/{id}")
    public PedidoMod updatePedidoContr(@RequestBody PedidoMod request, @PathVariable Long id){
        return this.PedidoServi.updatePedidoContr(request, id);
    }

    @DeleteMapping(path ="/Eliminar/{id}")
    public String  DeletePedido(@PathVariable  Long id){
        boolean ok= this.PedidoServi.DeletePedido(id);
        if(ok){
            return "Usuario " + id + "eliminado";
        }else {
            return "Error en la eliminacion";
        }
    }

}
