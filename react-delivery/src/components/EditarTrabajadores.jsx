import { Component } from "react";
import Header from "./Header";
import './EditarTrabajadores.css'

class EditarTrabajadores extends Component {

  render(){
    return(
      <>
      <Header/>
      <form className="formulario" onSubmit>
      <div className="campo">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          onChange
        />
      </div>
      <div className="campo">
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          onChange
        />
      </div>
      <div className="campo">
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          onChange
        />
      </div>
      {/* Otros campos del usuario */}
      <button type="submit">Guardar cambios</button>
    </form>
    </>
    );
  }
}
export default EditarTrabajadores