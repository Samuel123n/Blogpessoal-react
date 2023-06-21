import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';

function ListaTema() {

  return (
    <>
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              Minha descrição
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
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
    </>
  );
}


export default ListaTema;