import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trabajadores.css'
import Header from './Header'
class Trabajadores extends Component{


  render(){
    return(
      <>
      <Header/>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="rounded rounded-lg menu" style={{ width: '600px', height: '300px', backgroundColor: 'rgb(105, 150, 168' }}>
        <ul>
          <li><a className= "boton-enlace" href="/verTrabajadores">VER TRABAJADORES</a></li>
          <li><a className= "boton-enlace" href="/EditarTrabajadores">CREAR / ELIMINAR TRABAJADORES</a></li>
        </ul>
      </div>
      </div>
      </>
    )
  }
}
export default Trabajadores