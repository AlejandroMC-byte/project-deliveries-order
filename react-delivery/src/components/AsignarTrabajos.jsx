import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import Header from './Header';
import UserService from '../service/UserService'
import axios from 'axios';
const baseUrl="http://localhost:8080/Pedido";
class AsignarTrabajos extends Component {
  constructor(){
    super()
    this.state = {};
    this.UserService = new UserService();
  }
  AsignarTrabajo= async() =>{
    await axios.get(baseUrl, {params: {sw_estado: '1'}})
    .then(response=>{
      // console.log('aqui llegue')
        alert('Trabajo asignado')
        document.getElementById('botonAsignar').disabled =true;
        return response.data[0];
    })
  }
  componentDidMount(){
    this.UserService.getMensajero().then(data => this.setState({workers: data}))
  }
  render(){
  return (
    <>
    <Header/>
    <br />
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="titulo-animado">¡Asigna un trabajo a tus mensajeros!</h1>
    <br /><br />
    <div id="datatable-trabajadores">
                <DataTable style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} value={this.state.workers}>
                    <Column field="id" header="ID MENSAJERO"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="identificacion" header="Identificacion"></Column>
                    <Column field="id_usuario" header="ID USUARIO"></Column>
                    <Column field="" header="Asignar" body={
                      <button id='botonAsignar' className="btn btn-primary" onClick={()=> this.AsignarTrabajo()}>ASIGNAR TRABAJO</button>
                      }>
                    </Column>
                </DataTable>
                <br />
                <a style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} className= "boton-enlace" href="/trabajadores">Volver</a>
            </div>
      
    </>
  );
  }
}

export default AsignarTrabajos;