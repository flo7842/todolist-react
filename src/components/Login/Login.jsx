import React, { Fragment, useEffect, useState } from 'react';
import style from './Login.module.css'


const Login = (props) => {
    
    
    return (
        <Fragment>
            <div className={style.container}>
                <div>
                    <h1>Se connecter</h1>
                </div>
                <div className={style.inputLogin}>
                    <input type="text" name="email" onChange={props.emailValue} placeholder="Adresse email" />
                    <input type="text" name="mdp" onChange={props.mdpValue} placeholder="Mot de passe" />
                </div>
                <button className={style.btnLogin} onClick={props.login}>Se connecter</button>
            </div>
        </Fragment>
    );
};

export default Login;