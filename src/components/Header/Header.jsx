import React from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={style.todoHead}>
                <p className={style.firstp}>TODOLIST</p>
                <Navbar />
            </div>
            
        </div>
    );
};

export default Header;