import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PostScreen from './PostScreen';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,

      '& .MuiPaper-root':{
          backgroundColor:"white",
          color:"#5e646b",
          marginBottom: theme.spacing(2)
      },

      '& .MuiBox-root':{
          padding:0
      },

      '& .MuiPaper-elevation4':{
          boxShadow: "none"
      },

      '& .MuiTab-root':{
          minWidth:100,
          textTransform:"none"
      }
    },
  }));

const ProfileTabs = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Gönderiler"/>
            <Tab label="Önergeler"/>
            <Tab label="Misyonlar" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PostScreen/>
          <PostScreen/>
          <PostScreen/>
          <PostScreen/>
          <PostScreen/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    )
}

export default ProfileTabs;