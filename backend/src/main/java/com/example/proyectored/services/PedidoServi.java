package com.example.proyectored.services;

import com.example.proyectored.models.PedidoMod;
import com.example.proyectored.models.UsuarioMod;
import com.example.proyectored.repositories.PedidoRepositorio;
import com.example.proyectored.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class PedidoServi {
    @Autowired
    PedidoRepositorio PedidoRepo;

    public ArrayList<PedidoMod> getPedido(){
        return (ArrayList<PedidoMod>) PedidoRepo.findAll();

    }

    public  PedidoMod savePedido(PedidoMod pedido){
        return PedidoRepo.save(pedido);

    }

    public Optional<PedidoMod> getIdPedido(Long id){
        return PedidoRepo.findById(id);


    }

    public PedidoMod updatePedidoContr(PedidoMod request, Long id){
        PedidoMod   user = PedidoRepo.findById(id).get();
        user.setDescripcion(request.getDescripcion());
        return user;

    }
   public Boolean DeletePedido(Long id){
        try{
            PedidoRepo.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
   }


}
