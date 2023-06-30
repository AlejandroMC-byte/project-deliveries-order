import React, { Component } from 'react';
import Header from './Header'
import ImageCenter from './ImageCenter';

class Home extends Component{


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