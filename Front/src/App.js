import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';

import { PaginaAula } from './Pages/PaginaAula/PaginaAula';
import { PaginaBemVindo } from './Pages/PaginaBemVindo/PaginaBemVindo';
import { PaginaDescobrir } from './Pages/PaginaDescobrir/PaginaDescobrir';
import { PaginaHome } from './Pages/PaginaHome/PaginaHome';
import { PaginaLogin } from './Pages/PaginaLogin/PaginaLogin';
import { PaginaMeuEnvio } from './Pages/PaginaMeuEnvio/PaginaMeuEnvio';
import { PaginaRecuperarSenha } from './Pages/PaginaRecuperarSenha/PaginaRecuperarSenha';
import { PaginaRegistrar } from './Pages/PaginaRegistrar/PaginaRegistrar';

export const AppContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token:null, nome:null});

  return (
    <AppContext.Provider value={{auth: auth, setAuth: setAuth}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} ></Route>
          <Route exact path="/aula" element={<PaginaAula />}></Route>
          <Route exact path="/bemvindo" element={<PaginaBemVindo />}></Route>
          <Route exact path="/descobrir" element={<PaginaDescobrir />}></Route>
          <Route exact path="/home" element={<PaginaHome />}></Route>
          <Route exact path="/login" element={<PaginaLogin />}></Route>
          <Route exact path="/meuenvio" element={<PaginaMeuEnvio />}></Route>
          <Route exact path="/recuperarsenha" element={<PaginaRecuperarSenha />}></Route>
          <Route exact path="/registrar" element={<PaginaRegistrar />}></Route>                   
        </Routes>   
      </Router>
    </AppContext.Provider>
  );
}

export default App;
