import { Avatar, Grid, Hidden, IconButton, makeStyles, Typography } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        position:"relative",
        padding:5,
        [theme.breakpoints.down("xs")]: {
            maxWidth:368,
        },
        '&:hover':{
            backgroundColor: "#F5F5F5"
        },
        borderLeft:"1px solid #f5f5f5",
        borderRight:"1px solid #f5f5f5",
        borderBottom:"1px solid #f5f5f5",
    },

    large:{
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    typographyCss:{
        marginRight:10
    },

    gridBody:{
        padding:10,
        [theme.breakpoints.down("xs")]: {
            padding:"10px 0px 10px 7px",
        }
    },
    
    moreIcon:{
        position:"absolute",
        top:0,
        left:570,
        [theme.breakpoints.down("xs")]: {
            top:0,
            left:305
        }

    }

}))

const PostScreen = () => {
    const classes = useStyles();
    return(
            <Grid className={classes.root} container direction="column" xs={12}>
            <Grid item container alignItems="center" spacing={3} className={classes.gridBody}>
                <Grid item>
                <Avatar className={classes.large} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" spacing={1} style={{paddingBottom: "3px"}}>
                    <Typography className={classes.typographyCss}>Bahadır Şenbay</Typography>
                    <Typography variant="caption">2 Saat önce</Typography>
                    </Grid>
                    <Typography variant="caption" display="block">@ykasyayenidnya4</Typography>
                </Grid>
                <Hidden smDown>
                   <Grid item xs/> 
                </Hidden>  
                <Grid item className={classes.moreIcon}>
                <IconButton>
                    <MoreVertIcon fontSize="small"/>
                </IconButton>
                </Grid>
            </Grid>

            <Grid item container  style={{paddingLeft:10, paddingRight:10}}>
                <Typography variant="body2" gutterBottom>
                Osmanlı'da din elden gidiyor diyenler yüzünden ülke son evresine 200 sene geriden geldi. 
                Ve halen Türkiye cumhuriyetinde gelişmelere kapalı olan, 
                şu gevur malı şu kafir malı diye ülkemize gelişmelerin girmesini istemeyen bir kesim mevcut. 
                Ve bunların istediklerini yerine getiren bir hükümet... 
                </Typography>
            </Grid>

            <Grid item container>
                <Grid item>
                <IconButton>
                    <RepeatIcon fontSize="small"/>
                </IconButton>
                <IconButton>
                    <MessageOutlinedIcon fontSize="small"/>
                </IconButton>
                </Grid>
                <Grid item sm xs={7}/>
                <Grid item>
                <IconButton>
                    <KeyboardCapslockIcon fontSize="small"/>
                </IconButton>
                </Grid>
            </Grid>
            </Grid>        
    )
}

export default PostScreen;