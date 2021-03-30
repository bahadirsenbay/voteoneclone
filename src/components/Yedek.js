import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import Logo from "../img/logo.png";
import '../css/Navigation.css'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root:{
       border:"1px solid #000"
    },
    btnCss:{
        backgroundColor: "#D84B42",
        color: "white",
        padding: "10px 40px 10px 40px",
        borderRadius: "25px",
        '&:hover':{
            backgroundColor: "#CE2A2B"
        }
    }
}))

const NavigationComp = () => {
    const classes = useStyles();
    return(
        <div className="navigationBody">
            <ul>
                <li><img src={Logo} height="40px" width="40px"/></li>
                <li><Link to="/"><HomeOutlinedIcon/>Ana Sayfa</Link></li>
                <li><Link to="/notifications"><NotificationsNoneOutlinedIcon/>Bildirimler</Link></li>
                <li><QuestionAnswerOutlinedIcon/>Mesajlar</li>
                <li><GradeOutlinedIcon/>Misyonlar</li>
                <li><EmojiObjectsOutlinedIcon/>Önergeler</li>
                <li><GavelOutlinedIcon/>Senato</li>
                <li><PieChartOutlinedIcon/>İstatistikler</li>
                <li><FingerprintIcon/>Prensipler</li>
            </ul>
            <Grid container justify="center" spacing={2}>
                    <Button className={classes.btnCss} variant="contained">
                        <CreateOutlinedIcon/>Gönderi Paylaş
                    </Button>
            </Grid>
        </div>
    )
}

export default NavigationComp;