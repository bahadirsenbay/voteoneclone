import React, { useState } from 'react';
import { ListItemIcon, ListItemText, makeStyles, MenuItem } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';

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

const DropdownComp = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <MenuItem component={Link} to="/profile" onClick={handleClose}>
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
        </div>
    )
}

export default DropdownComp;