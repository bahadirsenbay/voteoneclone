import { Avatar, Grid, InputBase, makeStyles, Menu, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Logo from '../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import DropdownComp from './DropdownComp';
import Photo from '../img/profile.jpg'


const StyledMenu = withStyles({
    paper: {
        top:"61px !important",
        width:240,
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
        marginTop:17,
        marginBottom:10
    },

    searchInput: {
        fontSize: "1rem",
        backgroundColor: "#F5F5F5",
        borderRadius:25,
        width:"100%",

        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(2)
        },
    },

    large:{
        border:"2px solid #69D5EC"
    }
}))


const MobileNavScreen = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item container alignItems="center" >

                <Grid style={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs={2} sm={2} ><Link to="/"><img src={Logo} height="35px" width="35px" alt="logo" /></Link></Grid>
                <Grid style={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs={8} sm={8}>
                    <InputBase
                        className={classes.searchInput}
                        placeholder="Ara..."
                        startAdornment={<SearchIcon fontSize="small" />}
                    />
                </Grid>
                <Grid onClick={handleClick} style={{display:"flex", alignItems:"center", justifyContent:"Center"}} item xs={2} sm={2}><Avatar src={Photo} className={classes.large}>B</Avatar></Grid>
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

export default MobileNavScreen;