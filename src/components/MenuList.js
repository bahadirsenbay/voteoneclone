import {  ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

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

const MenuList = () => {

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl)

    };

    const handleClose = () => {
        setAnchorEl(null);
        console.log(anchorEl)
    };

    return(
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
    )
}

export default MenuList;