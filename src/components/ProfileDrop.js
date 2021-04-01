import { Avatar, Grid, makeStyles, Menu, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import DropdownComp from './DropdownComp';
import Photo from '../img/profile.jpg'

const StyledMenu = withStyles({
    paper: {
        top:"90px !important",
        width:297,
        height:"auto",
        border: "1px solid #e2e2e2"
    }
})((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F5F5F5",
        maxWidth: 294,
        padding: 5,
        borderRadius: 40,
        cursor: "pointer",
        overflow:'hidden'
    },

    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        border: "2px solid #69D5EC"
    },

    btnCss: {
        marginLeft: theme.spacing(4),
        color: "#7F8199",
        marginTop: 5
    },

    listItem:{
        fontSize:17
    },
}))



const ProfileDrop = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container>
            <Grid container className={classes.root} onClick={handleClick}>
                <Grid item container direction="row" spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar alt="Travis Howard" src={Photo} className={classes.large} />
                    </Grid>
                    <Grid item direction="column" style={{ marginTop: 5 }}>
                        <Grid item justify="center">
                            <Typography>Bahadır Şenbay</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{ opacity: 0.7 }} variant="caption" display="block" gutterBottom>@bahadirsenbay</Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.btnCss}>
                        <KeyboardArrowDownIcon />
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <StyledMenu
                    className={classes.menuBody}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <DropdownComp/>
                    
                    
                </StyledMenu>
            </Grid>
        </Grid>
    )
}

export default ProfileDrop;