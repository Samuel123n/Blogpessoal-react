import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar className='fundotab' position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Este blog é um espaço aberto para discussão e troca de ideias. Adoraria ouvir sua opinião nos comentários e conhecer pessoas com interesses semelhantes. Acredito que a diversidade de perspectivas enriquece nossa experiência, por isso valorizo a participação de todos.

            Espero que este blog se torne uma fonte de inspiração e informação para você. Sinta-se à vontade para explorar os artigos anteriores, assinar a newsletter e seguir minhas redes sociais para se manter atualizado com as últimas postagens.

            Agradeço por estar aqui e espero que você desfrute da jornada que compartilharemos juntos. Vamos embarcar nesta aventura de descoberta, aprendizado e diversão!"</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;