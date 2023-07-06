import React from "react";
import './Navbar.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Grid, IconButton } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));



function Navbar() {
    const classes = useStyles();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuario desconectado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        navigate('/login')
    }


    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar  position='static' className="fundonavbar">
            <Toolbar >
                <Box >
                    <Link to="/home">
                        <img className="icons " src="https://img.icons8.com/stickers/44/home.png" alt="Home" />
                    </Link>

                    <Link to="/posts">
                        <img className="icons" src="https://img.icons8.com/stickers/44/speech-bubble.png" alt="Icone Postagens" />
                    </Link>
                    <Link to="/temas">
                    <img className="icons" src="https://img.icons8.com/stickers/44/news--v1.png" alt="Icone Temas"/>
                    </Link>

                    <Link to="/formularioTema" >
                        <img className="icons" src="https://img.icons8.com/stickers/44/add-tab.png" alt="Icone Adicionar temas" />
                    </Link>

                </Box>
                <Box >
                    <Link to="/login" onClick={goLogout}>
                        <img className="icons" style={{marginLeft:102}}src="https://img.icons8.com/stickers/100/power-off-button.png" alt="power-off-button" />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    }

        return (

            <>
                {navbarComponent}
            </>
        )
    }
    export default Navbar;