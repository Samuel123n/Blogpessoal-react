import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReducer';
import  GitHub  from '../../../assets/github.gif';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='fundFooter'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Box display="flex" alignItems="center" justifyContent="center" className="social" >
                        <a href="https://github.com/MIKEMARQUEZINI" target="_blank">
                            <img src={GitHub} alt="github"/>
                        </a>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Copyright: Reserved Mike Marquezini</Typography>
                        </Box>


                    </Box>

                </Box>


            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
             {footerComponent} 
        </>
    )
}

export default Footer;