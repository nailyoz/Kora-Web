
import "./PaginaLogin.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Rodape } from "../../Components/Rodape/Rodape";

function FormularioLogin(){

    const navigate = useNavigate();
    
    const {register, handleSubmit} = useForm();

    const auth = useContext(AppContext);

    const logar = (loginDados) =>{
        login(loginDados).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            navigate('/kora/home');
        }).catch((error)=>{
            console.log(error);
        })
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(logar)}>
                <h3>Email:</h3> 
                <input className="inputlogin" type="text" name="email" placeholder="Digite seu email..." {...register('email', { required: true})}/><br/>           
                <h3>Senha:</h3>
                <input className="inputsenha" type="password" name="senha" placeholder="Digite sua senha..." {...register('senha', { required: true})}/><br/>
                <button className="botaoentrar">Login</button>            
            </form>
        </div>
        
    )
}


export function PaginaLogin(){
    return(
        <div className="paginalogin">
            <h1 className="titulo">Bem-vindo ao Kora!</h1>
            <FormularioLogin></FormularioLogin>
            <NavLink className="botaosenha" to="/recuperarsenha">Esqueceu sua senha?</NavLink>
            <NavLink className="botaoregistrar" to="/registrar">Registre-se!</NavLink>
            <Rodape></Rodape>
        </div>
    )
}