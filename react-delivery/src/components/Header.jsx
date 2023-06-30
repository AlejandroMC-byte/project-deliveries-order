import './Header.css'
import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends Component{
      cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('login', {path: "/"});
        cookies.remove('password', {path: "/"});
        cookies.remove('direccion', {path: "/"});
        window.location.href='./';
      }

      componentDidMount() {
          if(!cookies.get('login')){
              window.location.href="./";
          }
      }
  render(){
    return (
      <header id="nav-menu" aria-label="navigation bar">
        <div className="container">
          <div className="nav-start">
            <a className="logo" href="/">
              <img
                src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/logo.png?raw=true"
                width={35}
                height={35}
                alt="Inc Logo"
              />
            </a>
            <nav className="menu" />
            <ul className="menu-bar">
              
              <li>
                <a className="nav-link" href="/verTrabajadores">
                  Usuarios
                </a>
              </li>
              <li>
                <a className="nav-link" href="/AsignarTrabajos">
                  Asignar trabajos
                </a>
              </li>
              <li>
                <a className="nav-link" href="/MapaTrabajadores">
                  ¡MAPA!
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-end">
            <div className="right-container">
              <a className="btn btn-primary" onClick={()=>this.cerrarSesion()}>SALIR</a>
            </div>
            <button
              id="hamburger"
              aria-label="hamburger"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-menu" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;