import React, { Component } from "react";
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import Cookies from "universal-cookie";
import 'primereact/resources/themes/nova/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const cookies = new Cookies();
class PersonasTable extends Component{
    
render(){
        return(
            <div id="datatable-trabajadores">
                <DataTable>
                    <Column field="id" header="ID"></Column>
                    <Column field="nombre" header="Nombre"></Column>
                    <Column field="apellido" header="Apellido"></Column>
                    <Column field="empresa" header="Empresa"></Column>
                </DataTable>
            </div>
        )
    }
}
export default PersonasTable