import React, { useState } from 'react';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { 
    Avatar,
    Grid, 
    IconButton, 
    InputBase, 
    makeStyles, 
    Button, 
    TextField, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    Divider} 
from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import DialogComp from './DialogComp';


const useStyles = makeStyles((theme) => ({
    root:{
        borderRadius:20,
        backgroundColor:"#F0F2F5",
        marginBottom: theme.spacing(1.5),
        marginTop: theme.spacing(2)
    },

    postInput:{
        width:"80%",
        height:50,
        fontSize:20,
        fontWeight:500,

        '& .MuiAvatar-root':{
            border:"2px solid #69D5EC",
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }

    },

    dialogRoot:{
        width:600,
        height:297
    },

    btnCss:{
      backgroundColor:"#ce2a2b",
      color:"white",
      borderRadius:5,
      width:90
    },

    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      border: "2px solid #69D5EC",
      marginRight: theme.spacing(3)
  },

    inputBody:{
      minWidth: 470,
      '& .MuiInputBase-root':{
        fontSize:22
      }
    }


}))


const PostAdd = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Grid container>
        <Grid onClick={handleClickOpen} item container className={classes.root}>
            <Grid item sm={10} xs={8}> 
            <InputBase
            className={classes.postInput}
            placeholder="Bir Fikrin mi Var?"
            startAdornment={<Avatar>B</Avatar>}/>
            </Grid>
            <Grid item sm={2} xs={4} style={ isMobile ? {display:"flex", justifyContent:"flex-end"} : null}>
            <IconButton>
                <PanoramaOutlinedIcon/>
            </IconButton>
            <IconButton>
                <KeyboardArrowRightOutlinedIcon/>
            </IconButton>
            </Grid>
        </Grid>

        <Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogComp/>
        </Dialog>
        </Grid>
        </Grid>
    )
}

export default PostAdd;