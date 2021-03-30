import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 294,
      backgroundColor: "#f5f5f5",
      borderRadius:10,
      cursor:"pointer",
    },

    ListItemColor:{
        borderBottom:"1px solid #eeeff0",
        minHeight:73,
        '&:hover':{
            backgroundColor:"#EEEFF0",
          }
        
    },

    primary:{
        fontSize:16
    }
  }));

const PopularMissions = () => {
    const classes = useStyles();
    return(
        <Grid container>
            <List className={classes.root}>
                <Typography variant="h6" style={{borderBottom:"1px solid #eeeff0", padding:"0 0 6px 20px",color:"#777993"}}>
                    Popüler Misyonlar
                </Typography>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="İklim Değişikliği ve Hava Kirliliği" />
      </ListItem>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="Küresel Kararlar ve Etik Standartlar" />
      </ListItem>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="Gelir Dağılımı Eşitsizliği" />
      </ListItem>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="Günümüz Politik Hedefler ve Demokrasi" />
      </ListItem>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="Organize Suçlar ve Uyuşturucu Bağımlılığı" />
      </ListItem>
      <ListItem className={classes.ListItemColor}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText classes={{primary: classes.primary}} primary="Küresel Ekonomi ve Krizleri" />
      </ListItem>

    </List>
        </Grid>
    )
}

export default PopularMissions;