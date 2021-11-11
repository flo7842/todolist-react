import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './EditBtn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditBtn = (props) => {
    
   

    return (
        <div>
            <button type="button" onClick={props.onClickTask} className={props.btnVisible}>modifier</button>
        </div>
    );
};

export default EditBtn;