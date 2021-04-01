import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import bgImage from '../img/bgCover.jpg'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Photo from '../img/profile.jpg'



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

const ProfileBox = () => {
    const classes = useStyles();
    return(
        <Grid direction="column" item container style={{ maxHeight: 602, marginBottom:20}}>
                    <Grid sm={12} style={{ maxHeight: 300 }} item>
                        <img src={bgImage} className={classes.bgCss} alt="bgImage" />
                    </Grid>
                    <Grid item container sm={12} style={{ maxHeight: 300, padding: 15 }} item>
                        <Grid item container sm={10} >
                            <Grid item >
                                <Avatar src={Photo} className={classes.large}>
                                    B
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">Bahadır Şenbay</Typography>
                                <Typography className={classes.typographyCss} variant="caption" display="block">@bhdrsnby</Typography>
                                <Typography className={classes.typographyCss} variant="caption" display="block"><LocationOnOutlinedIcon fontSize="small" />Türkiye / Bursa</Typography>
                                <Typography className={classes.typographyCss} variant="caption" display="block"><AttachmentOutlinedIcon fontSize="small" />https://voteone.com</Typography>
                                <Typography className={classes.typographyCss} variant="caption" display="block"><InfoOutlinedIcon fontSize="small" />Kabul edilmiş bir hata, kazanılmış bir zafer demektir.</Typography>

                            </Grid>
                        </Grid>



                        <Grid item container sm={2}>
                            <Typography variant="caption">26 Vizyonerler</Typography>
                            <Typography variant="caption">52 Takipçiler</Typography>
                        </Grid>
                    </Grid>
                </Grid>
    )
}

export default ProfileBox;