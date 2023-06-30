import { Component } from "react";
import Header from "./Header";
// import './EditarTrabajadores.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const baseUrl="http://localhost:8080/user/Crear";
class EditarTrabajadores extends Component {
  
  state ={
    form:{
      login:'',
      password:'',
      direccion:'',
      correo:'',
      telefono:'',
      tipoUsuario:0,
    },
    form_mensajero:{
      nombre: '',
      identificacion: '',
      idUsuario: 0,
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

  guardarUsuario=async()=>{
    await axios.post(baseUrl,this.state.form)
    .then((response)=>{
      this.setState({
        form_mensajero:{
          ...this.state.form_mensajero,
          [this.state.form_mensajero.idUsuario]: response.id
        }
      })
      axios.post("http://localhost:8080/Mensajero/Crear",this.state.form_mensajero)
      alert('USUARIO Y MENSAJERO CREADO EXITOSAMENTE')
    })
  }

  render(){
    return (
      <>
        <Header />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <div className="container">
          <h1>Creacion de Usuario / Mensajero</h1>
          <form id="mensajeroForm">
            
            <div className="form-group">
              <label htmlFor="nombreInput">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombreInput"
                onChange={this.handleChange}
                name="nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="identificacionInput">Identificacion:</label>
              <input
                type="text"
                className="form-control"
                id="identificacionInput"
                onChange={this.handleChange}
                name="identificacion"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginInput">Login:</label>
              <input
                type="text"
                className="form-control"
                id="loginInput"
                onChange={this.handleChange}
                name="login"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={this.handleChange}
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccionInput">Direccion:</label>
              <input
                type="text"
                className="form-control"
                id="direccionInput"
                onChange={this.handleChange}
                name="direccion"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correoInput">Correo:</label>
              <input
                type="text"
                className="form-control"
                id="correoInput"
                onChange={this.handleChange}
                name="correo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefonoInput">Telefono:</label>
              <input
                type="text"
                className="form-control"
                id="telefonoInput"
                onChange={this.handleChange}
                name="telefono"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipoUsuarioInput">Tipo usuario:</label>
              <input
                type="number"
                className="form-control"
                id="tipoUsuarioInput"
                onChange={this.handleChange}
                name="tipoUsuario"
                required
              />
              <p>1 - Administrador </p>
              <p>2 - Mensajero </p>
              <p>3 - Empleado </p>
            </div>
            <br />
            <button type="submit" className="btn btn-primary" onClick={()=> this.guardarUsuario()}>
              Crear Mensajero
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default EditarTrabajadores