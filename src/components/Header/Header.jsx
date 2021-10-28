import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={style.todoHead}>
                <p className={style.firstp}>TODOLIST</p>
                <p className={style.secondp}>T</p>
            </div>
            
        </div>
    );
};

export default Header;