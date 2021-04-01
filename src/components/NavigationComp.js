import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import { Button, Dialog, Grid } from '@material-ui/core';
import DialogComp from './DialogComp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

    },
    
    '&.MuiListItem-root':{
      fontSize:50
    },

    btnCss:{
        borderRadius: 25,
        marginBottom: 3,
        paddingLeft: 50,
        color:"#595f66",
        '&:hover':{
          backgroundColor:"#F5F5F5",
          color:"#CE2A2B"
        }
      
    },
    postBtn:{
      backgroundColor: "#D84B42",
      color: "white",
      padding: "10px 40px 10px 40px",
      borderRadius: "25px",
      '&:hover':{
          backgroundColor: "#CE2A2B"
      }

      
  },

}));


const NavigationComp = () => {
  
  const classes = useStyles();

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid style={{paddingTop:20, maxWidth:316}}>
        <Grid style={{marginLeft:55, marginBottom:10}}><img src={Logo} alt="logo" height="50px" width="50px"/></Grid>
      <Grid container justify="center">
    <List className={classes.root} aria-label="contacts">
      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <HomeOutlinedIcon style={{ fontSize:28}} />
        </ListItemIcon>
        <ListItemText primary="Ana Sayfa" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="/notifications" button>
        <ListItemIcon>
          <NotificationsNoneOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="Bildirimler" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <QuestionAnswerOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="Mesajlar" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <GradeOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText  primary="Misyonlar" />
      </ListItem>
      
      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <EmojiObjectsOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="Önergeler" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="Bildirimler/" button>
        <ListItemIcon>
          <GavelOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="Senato" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <PieChartOutlinedIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="İstatistikler" />
      </ListItem>

      <ListItem className={classes.btnCss} component={Link} to="/" button>
        <ListItemIcon>
          <FingerprintIcon style={{ fontSize:28}}/>
        </ListItemIcon>
        <ListItemText primary="Prensipler" />
      </ListItem>
    </List>
    <Button className={classes.postBtn} onClick={handleClickOpen} variant="contained">
      <CreateOutlinedIcon/>Gönderi Paylaş
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogComp/>
        </Dialog>
    </Grid>
    </Grid>
  );
}

export default NavigationComp;