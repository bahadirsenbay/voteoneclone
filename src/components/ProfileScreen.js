import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Layout from './Layout';
import { isMobile } from 'react-device-detect';
import bgImage from '../img/bgCover.jpg'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ProfileTabs from './ProfileTabs';
import ProfileBox from './ProfileBox';
import MobileProfileBox from './MobileProfileBox';


const useStyles = makeStyles((theme) => ({
    root: {
        
    },

    bgCss: {
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            height: "100%",
            width: "100%"
        }
    },

    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        border: "2px solid #69D5EC",
        marginTop: "-68px",
        marginRight: 20,
        marginLeft: 6
    },

    typographyCss: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(0.5),
        opacity: 0.5,

        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const ProfileScreen = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Grid container direction="column">
                <Grid item>
                    { !isMobile && <ProfileBox/>}
                    { isMobile && <MobileProfileBox/>}
                </Grid>
                <Grid item container>
                    <ProfileTabs/>
                </Grid>
            </Grid>

        </Layout>
    )
}

export default ProfileScreen;