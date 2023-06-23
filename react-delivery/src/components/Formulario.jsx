import "./Formulario.css"
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
//import { useState } from "react"
import React, { Component } from 'react';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();
// const [nombre, setNombre]= useState("")
// const [password, setPassword]= useState("")
// const [error, setError] = useState(false)
class Formulario extends Component{
  
  state={
      form:{
          username: '',
          password: ''
      }
    } 
  
  

    handleChange=async e=>{
       await this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        },
        

      });
      //alert(this.state.form.password)
    }

  iniciarSesion=async()=>{
    alert(this.state.form.password)
      await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
      .then(response=>{
        //alert(response)
          return response.data;
      })
      .then(response=>{
          if(response.length>0){
            //console.log('aqui llegue')
              var respuesta=response[0];
              cookies.set('id', respuesta.id, {path: "/"});
              cookies.set('Apellido', respuesta.apellido_paterno, {path: "/"});
              cookies.set('nombre', respuesta.nombre, {path: "/"});
              cookies.set('username', respuesta.username, {path: "/"});
              alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
              window.location.href="./home";
          }else{
              alert('El usuario o la contraseña no son correctos');
          }
      })
      .catch(error=>{
          console.log(error);
      })
  }

  componentDidMount(){
      if(cookies.get('username')){
          window.location.href="./home";
      }
  }
    
  render(){
    return (
      <div id="contenedor">
        <div id="central">
          <div id="login">
            <div className="titulo">Bienvenido</div>
            <form id="loginform" >
              <input
                type="text"
                // value={nombre}
                onChange={this.handleChange}
                name="username"
                placeholder="Usuario"
              />
              <input
                type="password"
                // value={password}
                onChange={this.handleChange}
                placeholder="Contraseña"
                name="password"
              />
              <button title="Ingresar" className="Ingresar" onClick={()=> this.iniciarSesion()}>
                Iniciar sesion
              </button>
            </form>
            {/* {error && <p>Todos los campos son obligatorios</p>} */}
            </div>
        </div>
      </div>
    );
  }
}

export default Formulario;