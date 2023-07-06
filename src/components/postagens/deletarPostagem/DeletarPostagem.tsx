import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import {useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../Services/service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {

          toast.warn('Você precisa se conectar!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/posts')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });

            toast.success('Postagem deletada com sucesso!', {
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
        
          function nao() {
            navigate('/posts')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim}>
              <img width="44" height="44" src="https://img.icons8.com/stickers/44/checkmark.png" alt="checkmark"/></Button>
              </Box>
              <Box>
              <Button  onClick={nao} >
              <img width="44" height="44" src="https://img.icons8.com/stickers/100/delete-sign.png" alt="delete-sign"/>
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;