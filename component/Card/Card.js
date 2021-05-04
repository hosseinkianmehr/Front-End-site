import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AppBar, Button, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Buttonn: {
        backgroundColor: "",
        height: "",

    },
    root: {
        maxWidth: 200,
        height:300
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Cardbace() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>

            <Card className={classes.root}>

                <CardHeader style={{ backgroundColor: "#ff6701" ,height:10 }}>
                    hello
      </CardHeader>
                <CardMedia
                    className={classes.media}
                    image="/static/image/"
                    title="Paella dish"
                />
                
                <CardContent >
                    <Grid container dir="rtl" spacing="4">

                        <Grid item xl={4}>

                            <Typography variant="caption" color="initial" component="p" dir="rtl" >
                                990000
                            </Typography>
                            <Typography variant="h6" color="initial" component="p" dir="rtl" >
                                99000
        </Typography>
                        </Grid>
                        <Grid item xl={4}>

                            <Typography variant="h6" color="initial" component="p"  >
                               30%
</Typography>
                        </Grid>
                        <Grid item xl={4}>

                            <Typography variant="h6" color="initial" component="p"  >
                                گردو اعلا
        </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions disableSpacing >
                    <Container >
                        <Grid spacing="2" container>

                            <Grid item sm={2}>
                                <IconButton aria-label="add to favorites" style={{ marginRight: "20px" }}>
                                    <FavoriteIcon />
                                </IconButton>
                            </Grid>

                            <Grid item sm={8} >
                                <Button variant="outlined" color="inherit" disableElevation style={{ height: "80%", width: "100%", marginLeft: "8px" }}>
                                    اضافه به سبد خرید
                                </Button>
                            </Grid>

                            <Grid item sm={2}  >
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Container>
                </CardActions>

            </Card>
        </div>
    );
}
