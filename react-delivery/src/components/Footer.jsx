import { Component } from "react";


class Footer extends Component{
  render(){
    return(
      <footer className="footer">
      <div className="container-footer">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Empresa de Entrega de Paquetes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
    )
  }
}
export default Footer;