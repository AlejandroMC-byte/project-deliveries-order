import { Component } from "react";
import './Trabajadores.css'
import Header from './Header'
class Trabajadores extends Component{
  
  render(){
    return(
      <>
      <Header/>
      <div className="menu">
        <ul>
          <li><a className= "boton-enlace" href="/verTrabajadores">VER /CREAR / ACTUALIZAR / ELIMINAR USUARIOS</a></li>
        </ul>
      </div>
      </>
    )
  }
}
export default Trabajadores