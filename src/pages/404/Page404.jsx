import React from 'react';
import "./page404.css";
import {NavLink} from "react-router-dom";

const Page404 = () => {
    return (
        <div className={"error"}>
            <h1>404</h1>
            <p className={""}>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={"/"} className={"toHome"}>Retourner sur la page d’accueil</NavLink>
        </div>
    );
};

export default Page404;
