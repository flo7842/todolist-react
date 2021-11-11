import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import style from './InputEdit.module.css'
import EditBtn from '../EditBtn/EditBtn';

const InputEdit = (props) => {

    return (
        <Fragment>
            <input type="text" name="name" className={props.visibleInput} onChange={props.handleChange} value={props.todoTitleItem} />
            <EditBtn onClickTask={props.updateTask} btnVisible={props.visibleBtn}/>
        </Fragment>
    );
};

export default InputEdit;