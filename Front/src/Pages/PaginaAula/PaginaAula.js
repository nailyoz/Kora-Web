import React from "react";
import "./PaginaAula.css";
import { Comentarios } from "../../Components/Comentarios/Comentarios";
import { Menu } from "../../Components/Menu/Menu";

export function PaginaAula(){
    return(
        <div>
            <Menu></Menu>
            <h1>PáginaAula</h1>
            <Comentarios></Comentarios>
        </div>
    )
}