import { Grid, Hidden, makeStyles, Typography, Divider } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import NavigationComp from './NavigationComp';
import RightMenu from './RightMenu';
import MobileNavScreen from './MobileNavScreen';

const useStyles = makeStyles((theme) => ({
    root:{
        position:"sticky",
        top:0,
        backgroundColor:"white",
        zIndex:1000,
        padding:"15px 15px 15px 30px",
        borderBottom: "1px solid #F5F5F5",

    },

    leftRoot:{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        height: "100vh",
        backgroundColor: "#fff",
    },

    rightRoot:{
        position:"fixed",
        right:0,
        paddingTop:14
    },

    textColor:{
        color:"#3f464e"
    }
}))

const Layout = (props) => {
    const classes = useStyles();
    return(
        <Grid container>
            <Hidden smDown>
                <Grid item sm={3} xs={"hide"}>
            <Grid className={classes.leftRoot}>
                <NavigationComp/>
            </Grid>
                
            </Grid>
            </Hidden>
            
            <Grid item sm={12} xs={12} lg={6} style={{border:"1px solid #f5f5f5", height: "100%"}}>
                { !isMobile && <Grid item className={classes.root}><Typography classes={{h5: classes.textColor}}  variant="h5">Son Gönderiler</Typography>
                </Grid>
                }
                
                { isMobile && <MobileNavScreen/>}
                { isMobile && <Divider/>}
                {
                    props.children
                }
            </Grid>
            <Hidden smDown>
                <Grid item sm={3}>
               <Grid className={classes.rightRoot} xs={"hide"}><RightMenu/></Grid> 
                </Grid>
            </Hidden>
            
        </Grid>
    )
}

export default Layout;