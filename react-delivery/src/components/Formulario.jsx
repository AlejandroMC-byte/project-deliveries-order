import "./Formulario.css"
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
//import { useState } from "react"
import React, { Component } from 'react';

const baseUrl="http://localhost:8080/user";
const cookies = new Cookies();
// const [nombre, setNombre]= useState("")
// const [password, setPassword]= useState("")
// const [error, setError] = useState(false)
class Formulario extends Component{
  
  state={
      form:{
          login: '',
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
    // alert(this.state.form.login)
    // alert(this.state.form.password)
      await axios.get(baseUrl, {params: {login: this.state.form.login, password: md5(this.state.form.password)}})
      .then(response=>{
        // console.log('aqui llegue')
        // alert(response)
          return response.data;
      })
      .then(response=>{
          if(response.length>0){
            // console.log('aqui llegue')
              var respuesta=response[0];
              cookies.set('id', respuesta.id, {path: "/"});
              cookies.set('login', respuesta.login, {path: "/"});
              cookies.set('password', respuesta.password, {path: "/"});
              cookies.set('direccion', respuesta.direccion, {path: "/"});
              alert(`Bienvenido ${this.state.form.login}`);
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
      if(cookies.get('login')){
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
                name="login"
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