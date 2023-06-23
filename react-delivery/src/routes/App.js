import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import '../App.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Formulario/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
