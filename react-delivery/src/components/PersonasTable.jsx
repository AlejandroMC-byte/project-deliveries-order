import React, { Component } from "react";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import Cookies from "universal-cookie";
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import axios from "axios";
import Header from "./Header";

const baseUrl = 'http://localhost:3001/trabajadores'
// const cookies = new Cookies();
// let data = [];
class PersonasTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            workers: []
        };
    }
    componentDidMount(){
        // alert(this.state.form.password)
          axios.get(baseUrl)
          .then(
              response => this.setState({ workers: response.data})
              
              )
            //   console.log(data)
          .catch(error=>{
              console.log(error);
          })
      }

render(){
        return(
            <>
            <Header/>
            <br />
            <h1 className="titulo-animado">¡Aqui estan tus trabajadores disponibles!</h1>
            <br /><br />
            <div id="datatable-trabajadores">
                <DataTable value={this.state.workers}>
                    <Column field="id" header="ID"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="apellido" header="Apellido"></Column>
                    <Column field="empresa" header="Empresa"></Column>
                </DataTable>
                <a className= "boton-enlace" href="/trabajadores">Volver</a>
            </div>
            </>
        )
    }
}
export default PersonasTable