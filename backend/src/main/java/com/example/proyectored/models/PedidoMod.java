package com.example.proyectored.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="pedidos")
public class PedidoMod {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;
    private Date fecha_hora;
    private int origen;
    private int destino;
    private String ciudad;
    private String  descripcion;
    private int tipo_transporte;
    private int numero_paquetes;
    private int id_usuario;
    private int id_mensajero;
    public String sw_estado;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(Date fecha_hora) {
        this.fecha_hora = fecha_hora;
    }

    public int getOrigen() {
        return origen;
    }

    public void setOrigen(int origen) {
        this.origen = origen;
    }

    public int getDestino() {
        return destino;
    }

    public void setDestino(int destino) {
        this.destino = destino;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getTipo_transporte() {
        return tipo_transporte;
    }

    public void setTipo_transporte(int tipo_transporte) {
        this.tipo_transporte = tipo_transporte;
    }

    public int getNumero_paquetes() {
        return numero_paquetes;
    }

    public void setNumero_paquetes(int numero_paquetes) {
        this.numero_paquetes = numero_paquetes;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public int getId_mensajero() {
        return id_mensajero;
    }

    public void setId_mensajero(int id_mensajero) {
        this.id_mensajero = id_mensajero;
    }

    public String getSw_estado() {
        return sw_estado;
    }

    public void setSw_estado(String ciudad) {
        this.sw_estado = sw_estado;
    }
}
