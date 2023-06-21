import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';

function ListaPostagem() {

  return (
    <>
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              Título
            </Typography>
            <Typography variant="body2" component="p">
              Texto da Postagem
            </Typography>
            <Typography variant="body2" component="p">
              Tema
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to="" className="text-decorator-none" >
                <Box mx={1}>
                <img width="40" height="40" src="https://img.icons8.com/glyph-neue/40/f2cc8f/create-new.png" alt="create-new"/>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                <img width="40" height="40" src="https://img.icons8.com/glyph-neue/40/f07167/trash.png" alt="delete"/>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>)
}

export default ListaPostagem;