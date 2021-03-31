import { Avatar, Grid, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { withStyles } from '@material-ui/core/styles';



import React, { useState } from 'react';

const StyledMenu = withStyles({
    paper: {
        top:"75px !important",
        width:297,
        height:425,
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
        console.log(anchorEl)

    };

    const handleClose = () => {
        setAnchorEl(null);
        console.log(anchorEl)
    };

    return (
        <Grid container>
            <Grid container className={classes.root} onClick={handleClick}>
                <Grid item container direction="row" spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
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
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <PersonOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Profil" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <PersonOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Senato" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <PersonOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Prensipler" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <PersonOutlineOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="İstatistikler" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <BookmarkBorderOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Kaydedilenler" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <SettingsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Ayarlar & Gizlilik" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <ContactSupportOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Yardım Merkezi" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <NightsStayOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Gece Modu" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{marginRight:"-15px"}}>
                            <ExitToAppOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText classes={{primary: classes.listItem}} primary="Çıkış Yap" />
                    </MenuItem>
                    
                </StyledMenu>
            </Grid>
        </Grid>
    )
}

export default ProfileDrop;