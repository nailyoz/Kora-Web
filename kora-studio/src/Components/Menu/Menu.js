import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";
import marca from "./marca.png";

export default function Menu(){

    const {setAuth} = useContext(AppContext);

    return(
        <nav className="menu">
            <div><img src={marca} alt=""></img></div>
            <div>
                <NavLink  to="/">Home</NavLink>
                <NavLink to="/meuplanner">Aulas</NavLink>
                {/* <div className="sair" onClick={()=>{setAuth({token:null, name:null})}}>Sair</div> */}
            </div>
        </nav>
    )
}