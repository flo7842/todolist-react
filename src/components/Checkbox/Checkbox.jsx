import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Checkbox.module.css'

const Checkbox = (props) => {
    console.log('props is checked', props.isChecked)
    const [toto, setToto] = useState('toto')
    return (
        <div className={style.checkboxSection}>
            <input type="checkbox" onChange={props.clickHandler} checked={props.isChecked} data-testid="custom-element" />
        </div>
    );
};

Checkbox.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default Checkbox;