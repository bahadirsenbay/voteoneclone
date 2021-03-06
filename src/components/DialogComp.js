import React, { useState } from 'react';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { 
    Avatar,
    Grid, 
    IconButton, 
    makeStyles, 
    Button, 
    TextField, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    Divider} 
from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{

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


const DialogComp = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <DialogTitle id="form-dialog-title" style={{padding: "10px 10px 2px 20px"}}>
          <Grid item container>
          <Grid item><IconButton variant="contained" onClick={handleClose}><CloseIcon fontSize="small"/></IconButton></Grid>
          <Grid item sm></Grid>
          <Grid item>{ value.length === 0 ? <Button variant="contained" style={{width:90}} disabled>POST</Button> : <Button variant="contained" className={classes.btnCss}>POST</Button>}</Grid>
          </Grid>
          </DialogTitle>
          <Divider/>
        <DialogContent>
          <DialogContentText>
            <Grid container>
              <Grid item container>
                <Grid>
                <Avatar className={classes.large}>
                  B
                </Avatar>
                </Grid>
                <Grid item>
                <TextField
                  className={classes.inputBody}
                  placeholder="Bir fikrin mi var?"
                  id="outlined-multiline-static"
                  InputProps={{ disableUnderline: true }}
                  onChange={(e) => setValue(e.target.value)}
                  multiline
                  rows={8}
                  value={value}
                />
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        </div>
    )
}

export default DialogComp;