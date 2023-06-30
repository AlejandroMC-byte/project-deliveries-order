import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import '../App.css'
import Trabajadores from '../components/Trabajadores';
import PersonasTable from '../components/PersonasTable';
import EditarTrabajadores from '../components/EditarTrabajadores';
import MapaTrabajadores from '../components/MapaTrabajadores';
import AsignarTrabajos from '../components/AsignarTrabajos';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Formulario/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/trabajadores" element={<Trabajadores/>}/>
        <Route exact path="/verTrabajadores" element={<PersonasTable/>}/>
        <Route exact path="/EditarTrabajadores" element={<EditarTrabajadores/>}/>
        <Route exact path="/MapaTrabajadores" element={<MapaTrabajadores/>}/>
        <Route exact path="/AsignarTrabajos" element={<AsignarTrabajos/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
