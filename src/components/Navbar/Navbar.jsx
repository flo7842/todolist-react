import React, { Fragment } from 'react';
import style from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const onHandlerAuthentication = () => {
        
    }

    const onLoginUser = () => {

    }

    return (
        <Fragment>
            <p className={style.secondp}>T</p>
            <nav className={style.navbar}>
                <ul>
                    <li onClick={onHandlerAuthentication}>Signin</li>
                       <Link to="/login">SignUp</Link>
                    <li>Logout</li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;