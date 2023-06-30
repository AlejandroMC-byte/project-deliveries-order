package com.example.proyectored.controllers;

import com.example.proyectored.models.ClienteMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.services.ClienteServi;
import com.example.proyectored.services.UsuarioServi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/cliente")
@CrossOrigin("*")
public class ClienteControl {
    @Autowired
    private ClienteServi clienteServi;

    @GetMapping
    public ArrayList<ClienteMod> getClientes(){
        return this.clienteServi.getCliente();

    }
    @RequestMapping("/Crear")
    @PostMapping
    public ClienteMod  saveCliente(@RequestBody ClienteMod cliente){

        return this.clienteServi.saveCliente(cliente);

    }

    @GetMapping(path = "/{id}")
    public Optional<ClienteMod> geId(@PathVariable Long id){
        return this.clienteServi.getIdCliente(id);

    }
    @PutMapping(path = "/Modificar/{id}")
    public ClienteMod updateClienteContr(@RequestBody ClienteMod request, @PathVariable Long id){
        return this.clienteServi.updateClienteContr(request, id);
    }

    @DeleteMapping(path ="/Eliminar/{id}")
    public String  DeleteCliente(@PathVariable  Long id){
        boolean ok= this.clienteServi.DeleteCliente(id);
        if(ok){
            return "Usuario " + id + "eliminado";
        }else {
            return "Error en la eliminacion";
        }
    }

}
