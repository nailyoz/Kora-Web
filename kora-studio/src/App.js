import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { PaginaLogin } from './Pages/PaginaLogin/PaginaLogin';
import { Home } from './Pages/Home/Home';

export const AppContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token:null, nome:null});

  return (
    <AppContext.Provider value={{auth: auth, setAuth: setAuth}}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navigate to="/kora/login" />} ></Route>
          <Route  path="/kora/login" exact element={<PaginaLogin />}></Route>
          <Route exact path="kora/home" element={<Home />}></Route>         
        </Routes>   
      </Router>
    </AppContext.Provider>
  );
}

export default App;
