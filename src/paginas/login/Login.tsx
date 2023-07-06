import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { toast } from 'react-toastify';




function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            toast.success('Usuario conectado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)


        } catch (error) {
            toast.error('E-mail ou Senha inválidos ! Tente novamente', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }


    return (
        <div className='body'>
        <Grid className='estrutura '>
            <div className="box ">
                <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="inputBox">
                            <input type="text" className="inputBox" value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' placeholder='Usuário' name='usuario' />
                            <i></i>
                        </div>
                        <div className="inputBox1">

                            <input value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' placeholder='Senha' name='senha' type='password' />
                            <i></i>
                        </div>
                        <div className="links">
                            <Link to='/cadastrousuario'>Cadastre-se</Link>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </Grid>
        </div>
    );
}

export default Login;