import './Header.css'
export function Header(){
    
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
                <a className="nav-link" href="/">
                  Trabajadores
                </a>
              </li>
              <li>
                <a className="nav-link" href="/">
                  Asignar trabajos
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-end">
            <div className="right-container">
              <a className="btn btn-primary" href="/">SALIR</a>
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