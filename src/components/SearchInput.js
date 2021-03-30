import { InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: "#fff"
    },

    searchInput:{
        fontSize: "1rem",
        minWidth:294,
        height:40,
        margin:5,
        borderRadius:25,
        backgroundColor:"#F5F5F5",

        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(2)
        },
    },
}))

const SearchInput = () => {
    const classes = useStyles();
    return(
        <div>
             <InputBase
                        className={classes.searchInput}
                        placeholder="Ara..."
                        startAdornment={<SearchIcon fontSize="small"/>}
             />
        </div>
    )
}

export default SearchInput;