import React, { Fragment } from 'react';
import style from './Navbar.module.css'

const Navbar = () => {

    const onHandlerAuthentication = () => {
        
    }

    return (
        <Fragment>
            <p className={style.secondp}>T</p>
            <nav className={style.navbar}>
                <ul>
                    <li onClick={onHandlerAuthentication}>Signin</li>
                    <li>SignUp</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;