import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor:"#f5f5f5",
      position:"fixed",
      bottom:-1,
      left:"-2px",
      zIndex:100,
    },
    selected:{
        color:"#D84B42 !important"
    }
  });

const BottomNav = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction classes={{ selected: classes.selected}} icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction classes={{ selected: classes.selected}} icon={<NotificationsNoneOutlinedIcon />} />
                <BottomNavigationAction classes={{ selected: classes.selected}} icon={<QuestionAnswerOutlinedIcon />} />
                <BottomNavigationAction classes={{ selected: classes.selected}} icon={<GradeOutlinedIcon />} />
                <BottomNavigationAction classes={{ selected: classes.selected}} icon={<EmojiObjectsOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav;