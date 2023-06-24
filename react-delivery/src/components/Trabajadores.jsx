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
          <li><a className= "boton-enlace" href="/verTrabajadores">VER TRABAJADORES</a></li>
          <li><a className= "boton-enlace" href="#">CREAR / ELIMINAR TRABAJADORES</a></li>
        </ul>
      </div>
      </>
    )
  }
}
export default Trabajadores