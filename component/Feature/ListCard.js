import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Cardbace from '../card/card';
function widthiner(params) {
    
}
{
}
const mystyle = makeStyles((theme)=>({
    mygrid:{
      
        
        
        height:"300",
        width:"1000",
        borderRadius:10,
        backgroundColor: " #ffa981 "
    },
    root:{
        borderRadius:10
    },
    taypo:{
        direction:"rtl",
        marginBlockEnd:"1%"
    }
}))
const ListCard = () => {
    const classs =mystyle()
    return (
        <div className={classs.root} >
            <div>
                <Typography className={classs.taypo} variant="h5">پرفروش ترین ها</Typography>
            </div>
            <Grid spacing="3" className={classs.mygrid} container>
            <Grid item>
            <Cardbace/>
            </Grid>
            <Grid item>
            <Cardbace/>
            </Grid>
            <Grid item>
            <Cardbace/>
            </Grid>
            <Grid item>
            <Cardbace/>
            </Grid>
            <Grid item>
            <Cardbace/>
            </Grid>
            <Grid item>
            <Cardbace/>
            </Grid>
            
            </Grid>
        </div>
    );
};

export default ListCard;