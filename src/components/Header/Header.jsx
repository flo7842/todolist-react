import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Header.module.css'
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";

import ToDo from '../ToDo/ToDo';
import Login from '../Login/Login';
import axios from 'axios';

const Header = () => {

    const [email, setEmail] = useState('')
    const [mdp, setMdp] = useState('')
    //const [userToken, setUserToken] = useState('')
    //const [userId, setUserId] = useState(null)
    //const [isLogged, setIsLogged] = useState(false)
    //const [req, setReq] = useState(null)
    const navigate = useNavigate();
    let authUser = {id: null, token: ''}

    const handleChangeEmail = async (e) => {
        await setEmail(e.target.value)
    }

    const handleChangeMdp = async (e) => {
        await setMdp(e.target.value)
    }

    const handleUserLogin = async event => {
        event.preventDefault()
        
        try{
            await axios
                .post('http://localhost:8000/api/login_check', {username: email, password: mdp})
                .then(response => {
                    authUser = JSON.stringify({id: response.data.data.id, token: response.data.token})
                })
                window.localStorage.setItem('authUser', authUser)
                
                navigate('/')
                
        }catch(error){
            console.log(error)
        }
           
    }

    useEffect(()=> {
        if(authUser.token.length !== 0){
            navigate('/')
        }
        //setUserId(id)
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({username: email, password: mdp})
            // };
            // const response = await fetch('http://localhost:8000/api/login_check', requestOptions)
            
            // const data = await response.json()
            // console.log(data)
        
    }, [])

    

    

    return (
        <div>
            <div className={style.todoHead}>
                <p className={style.firstp}>TODOLIST</p>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element={<ToDo />}></Route>
                
                <Route path='/login' element={<Login login={handleUserLogin} emailValue={handleChangeEmail} mdpValue={handleChangeMdp} />}></Route>
            </Routes>
        </div>
    );
};

export default Header;