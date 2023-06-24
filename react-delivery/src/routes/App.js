import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import '../App.css'
import Trabajadores from '../components/Trabajadores';
import PersonasTable from '../components/PersonasTable';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Formulario/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/trabajadores" element={<Trabajadores/>}/>
        <Route exact path="/verTrabajadores" element={<PersonasTable/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
