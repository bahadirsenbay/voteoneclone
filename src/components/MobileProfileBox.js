import { Avatar, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import bgImage from '../img/background.jpeg';
import Photo from '../img/profile.jpg'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const useStyles = makeStyles((theme) => ({
    root:{

    },

    textCss:{
        border:"1px solid #c1c1c1",
        borderRadius:3,
        padding:5,
        display:"flex",
        alignItems:"center",
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },

    typographyCss: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(0.5),
        opacity: 0.5,

        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },

    large:{
        width: theme.spacing(9),
        height: theme.spacing(9),
        border: "2px solid #69D5EC",
        marginRight: theme.spacing(1)
    },

    btnCss:{
        backgroundColor:"#cf3f2c !important",
        color:"white"
    }
}))

const MobileProfileBox = () => {
    const classes = useStyles();
    return(
        <Grid container style={{maxHeight:375}}>
            <Grid xs={12} item style={{maxHeight:186, overflow:"hidden", position:"relative"}}>
                <Grid><img src={bgImage} height="100%" width="100%" /></Grid>
                <Grid style={{position:"absolute", top:56, left:14, color:"white", maxWidth:325}} item container>
                    <Grid item><Avatar src={Photo} className={classes.large}>B</Avatar></Grid>
                    <Grid item direction="column" justify="center" style={{display:"flex"}}>
                        <Typography variant="h6">Bahadır Şenbay</Typography>
                        <Typography variant="caption">@bhdrsnby</Typography>
                    </Grid>
                </Grid>
                <Grid item style={{position:"absolute", top:130, left:313}}>
                    <IconButton className={classes.btnCss}>
                        <CreateOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid xd={12} item container style={{maxHeight:186, padding:14}}>
                <Grid item container style={{marginBottom: 5}}>
                    <Typography variant="caption" className={classes.textCss}>26 Vizyonerler</Typography>
                    <Typography variant="caption" className={classes.textCss}>52 Takipçiler</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.typographyCss} variant="caption" display="block"><LocationOnOutlinedIcon fontSize="small" />Türkiye / Bursa</Typography>
                    <Typography className={classes.typographyCss} variant="caption" display="block"><AttachmentOutlinedIcon fontSize="small" />https://voteone.com</Typography>
                    <Typography className={classes.typographyCss} variant="caption" display="block"><InfoOutlinedIcon fontSize="small" />Kabul edilmiş bir hata, kazanılmış bir zafer demektir.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileProfileBox;