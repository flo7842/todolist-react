import React, { useState } from 'react';
import style from './Checkbox.module.css'

const Checkbox = (props) => {

    return (
        <div className={style.checkboxSection}>
            <input type="checkbox" onClick={props.clickHandler}/>
        </div>
    );
};

export default Checkbox;