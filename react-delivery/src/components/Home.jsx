import {Header} from './Header'
import {PersonasTable} from './PersonasTable'
export function Home({user}){
    return(
        <div>
            <Header />
            <br /><br />
            <h1>BIENVENIDO A TU HOME DE ENVIO DE PAQUETES {user}</h1>
            <br /><br />
            <PersonasTable/>
        </div>
    )
}