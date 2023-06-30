import { Component } from "react";
import Header from "./Header";
// import './EditarTrabajadores.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const baseUrl="http://localhost:8080/user/Crear";
class EditarTrabajadores extends Component {
  
  state ={
    form:{
      id:6,
      login:'',
      password:'',
      direccion:'',
      correo:'',
      telefono: 0,
      tipoUsuario:0,
    },
    form_mensajero:{
      id:3,
      nombre: '',
      identificacion: 0,
      idUsuario: 0,
    }

  }
  handleChange=async e=>{
    e.preventDefault()
    await this.setState({
     form: {
       ...this.state.form,
       [e.target.name]: e.target.value
     },
     
   });
   //alert(this.state.form.password)
  }

  guardarUsuario=async()=>{
    try {
      console.log(this.state.form);
      console.log(this.state.form_mensajero);
      await axios.post(baseUrl,this.state.form)
      .then((response)=>{
      this.setState({
        form_mensajero:{
          ...this.state.form_mensajero,
          [this.state.form_mensajero.idUsuario]: response.id
        }
      })
      axios.post("http://localhost:8080/Mensajero/Crear",this.state.form_mensajero)
      this.setState({
        form:{
          ...this.state.form,
          [this.state.form.id]: this.state.form.id +=1
        }
      })
      this.setState({
        form_mensajero:{
          ...this.state.form_mensajero,
          [this.state.form_mensajero.idUsuario]: this.state.form.idUsuario +=1
        }
      })
        alert('USUARIO Y MENSAJERO CREADO EXITOSAMENTE')
      })
    } catch (error) {
      console.error(error)
    }
    
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
                type="number"
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