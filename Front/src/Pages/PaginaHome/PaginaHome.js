import React from "react";
import "./PaginaHome.css";

import { Menu } from "../../Components/Menu/Menu";
import { Carrousel } from "../../Components/Carrousel/Carrousel";

export function PaginaHome(){
    return(
        <div>
            <Menu></Menu>
            <h1>Página Home!</h1>
            <Carrousel></Carrousel>
        </div>
    )
}