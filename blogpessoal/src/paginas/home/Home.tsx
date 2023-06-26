import React from 'react';
import { Typography, Grid, Button, Tooltip, Fab, makeStyles, createStyles, Theme } from '@material-ui/core';
import { Box, } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import AddIcon from '@material-ui/icons/Add';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(2),
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    }),
);


function Home() {
    const classes = useStyles();
   

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seus pensamentos têm o poder de criar impacto. Compartilhe-os e faça a diferença!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://img.freepik.com/vetores-gratis/blogar-divertido-criacao-de-conteudo-streaming-online-videoblog-jovem-fazendo-selfie-para-rede-social-compartilhando-feedback-estrategia-de-autopromocao-ilustracao-vetorial-de-metafora-de-conceito_335657-855.jpg?w=826&t=st=1687357166~exp=1687357766~hmac=9a10a800ba8da95bac15518414f2b345118f434a37e007325349fe28771747a1" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
                <div>
                <Link to="/formularioPostagem" >
                        <Tooltip title="Add" aria-label="add">
                            <Fab color="secondary" className={classes.absolute}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </Link>
                </div>
            </Grid>
        </>
    );
}

export default Home;