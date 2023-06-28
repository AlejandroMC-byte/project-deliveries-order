import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Header from './Header'
import ImageCenter from './ImageCenter';
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
            <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>BIENVENIDO A TU HOME DE ENVIO DE PAQUETES</h1>
            <br />
            <p style={{marginLeft: '1.5rem'}}>Arriba puedes encontrar tus opciones como usuario ADMIN</p>
            
            <ImageCenter />      
        </div>
    )
    }
}

export default Home;