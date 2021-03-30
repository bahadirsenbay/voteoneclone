import { Avatar, Grid, InputBase, makeStyles } from '@material-ui/core';
import React from 'react';
import Logo from '../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:10,
        marginBottom:10
    },

    searchInput: {
        fontSize: "1rem",
        backgroundColor: "#F5F5F5",
        borderRadius:25,

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
    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item container alignItems="center" >

                <Grid style={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs={2}><img src={Logo} height="45px" width="45px" alt="logo" /></Grid>
                <Grid style={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs={8}>
                    <InputBase
                        className={classes.searchInput}
                        placeholder="Ara..."
                        startAdornment={<SearchIcon fontSize="small" />}
                    />
                </Grid>
                <Grid onClick={()=>alert(1)} style={{display:"flex", alignItems:"center", justifyContent:"Center"}} item xs={2}><Avatar className={classes.large}>B</Avatar></Grid>
            </Grid>

        </Grid>
    )
}

export default MobileNavScreen;