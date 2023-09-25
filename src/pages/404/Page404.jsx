import React from 'react';
import './_404.scss';
import {NavLink} from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page-404__error">
            <h1 className="page-404__title">404</h1>
            <p className="page-404__description">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={"/"} className="page-404__toHome">Retourner sur la page d’accueil</NavLink>
        </div>
    );
};

export default Page404;
