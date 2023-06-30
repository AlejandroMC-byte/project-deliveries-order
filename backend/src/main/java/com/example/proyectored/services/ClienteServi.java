package com.example.proyectored.services;

import ch.qos.logback.core.net.server.Client;
import com.example.proyectored.models.ClienteMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.ClienteRepositorio;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ClienteServi {
    @Autowired
    ClienteRepositorio clienteRepositorio;

    public ArrayList<ClienteMod> getCliente(){
        return (ArrayList<ClienteMod>) clienteRepositorio.findAll();

    }

    public  ClienteMod saveCliente(ClienteMod cliente){
        return clienteRepositorio.save(cliente);

    }

    public Optional<ClienteMod> getIdCliente(Long id){
        return clienteRepositorio.findById(id);


    }

    public ClienteMod updateClienteContr(ClienteMod request, Long id){
        ClienteMod   user = clienteRepositorio.findById(id).get();
        user.setNombre(request.getNombre());
        return user;

    }
   public Boolean DeleteCliente(Long id){
        try{
            clienteRepositorio.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
