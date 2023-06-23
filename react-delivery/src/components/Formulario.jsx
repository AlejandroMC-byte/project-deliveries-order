import "./Formulario.css"
import { useState } from "react"

export function Formulario({setUser}){
    const [nombre, setNombre]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(nombre === "" || password === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])
    }

    return (
      <div id="contenedor">
        <div id="central">
          <div id="login">
            <div className="titulo">Bienvenido</div>
            <form id="loginform" onSubmit={handleSubmit}>
              <input
                type="text"
                value={nombre}
                onChange={e=> setNombre(e.target.value)}
                name="usuario"
                placeholder="Usuario"
                required
              />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña"
                name="password"
                required
              />
              <button title="Ingresar" name="Ingresar">
                Login
              </button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
            </div>
        </div>
      </div>
    );
}