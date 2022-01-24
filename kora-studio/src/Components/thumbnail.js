import React from 'react'
import { Player } from 'video-react';
import './styles/Thumbnail.css'
/**
 * <div className="Thumbnail">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
function Tags(nivel, genero, professor) {
    return(
        <div> 
            <p className="nivel">{nivel}</p>
            <p className="genero">{genero}</p> 
            <p className="professor">{professor}</p>  
        
        </div>
    )
}
export default function Thumbnail() {
  return (
    <div className="Thumbnail">
        <Player>
        <source src="https://www.youtube.com/watch?v=Pzmcy_4zA08&list=RD0utSag5hDjg&index=7" />
        </Player>
        <Tags 
        nivel='Iniciante'
        genero='Waacking'
        professor='Lip J'
        ></Tags>
        <header className="titulo"> Juicy (LIZZO) | Coreografia por: Lip J </header>
    
    </div>
  )
}

