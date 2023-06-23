import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Header from './Header'
import PersonasTable from './PersonasTable'
const cookies = new Cookies();

class Home extends Component{

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    render(){
    return(
        <div>
            <Header />
            <br /><br />
            <h1>BIENVENIDO A TU HOME DE ENVIO DE PAQUETES</h1>
            <br /><br />
            <PersonasTable/>
        </div>
    )
    }
}

export default Home;