import React, { Component } from "react";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Header from "./Header";
import UserService from "../service/UserService";
// const cookies = new Cookies();
// let data = [];
class PersonasTable extends Component{
    constructor(){
        super()
        this.state = {};
        this.UserService = new UserService();
      }
    
      componentDidMount(){
        this.UserService.getMensajero().then(data => this.setState({workers: data}))
      }
    

render(){
        return(
            <>
            <Header/>
            <br />
            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="titulo-animado">¡Aqui estan todos tus mensajeros!</h1>
            <br /><br />
            <div id="datatable-trabajadores">
                <DataTable value={this.state.workers}>
                    <Column field="id" header="ID MENSAJERO"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="identificacion" header="Identificacion"></Column>
                    <Column field="id_usuario" header="ID USUARIO"></Column>
                </DataTable>
                <br />
                <a style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} className= "boton-enlace" href="/trabajadores">Volver</a>
            </div>
            </>
        )
    }
}
export default PersonasTable