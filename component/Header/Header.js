import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Menu from './Menu';
import PersonIcon from '@material-ui/icons/Person'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const stylebox = makeStyles({
    appbarstyle: {
        background: "blue",
        height: "60px",
        borderEndEndRadius: 332,
        display:"flex",


    },
    Tooltipstyle: {
        alignItems: 'center',
        display:"flex",
        flexGrow: 1,
       
    },
    divstyel: {
        marginRight: "6%",
        dir: 'rtl',
        padding:10


    }
})
const Header = () => {
    const clases = stylebox()
    return (

        <AppBar className={clases.appbarstyle}>
            <Toolbar>

                <div className={clases.Tooltipstyle}>
                    <Typography variant="h6" >hello</Typography>
                    <IconButton >
                        <PersonIcon />
                    </IconButton>
                    <IconButton >
                        <ShoppingBasketIcon />
                    </IconButton>
                </div>

                <div className={clases.divstyel}>
                    <Button>dfsddf</Button>
                    <Button>dfsddf</Button>
                    <Button>dfsddf</Button>
                    <Button>dfsddf</Button>
                </div>
            </Toolbar>
        </AppBar>


    );
};

export default Header;