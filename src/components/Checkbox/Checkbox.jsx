import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Checkbox.module.css'

const Checkbox = (props) => {

    return (
        <div className={style.checkboxSection}>
            <input type="checkbox" onClick={props.clickHandler} checked={props.isChecked ? true : false} data-testid="custom-element" />
        </div>
    );
};

Checkbox.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default Checkbox;