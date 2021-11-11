import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css'

const Button = (props) => {

    return (
        <div className={style.checkboxSection}>
            <button className={props.btnStyle} onClick={props.postLogin} type="button" disabled={props.disableBtn}>Ajouter</button>
        </div>
    );
};

// Button.propTypes = {
//     clickHandler: PropTypes.func.isRequired
// }

export default Button;