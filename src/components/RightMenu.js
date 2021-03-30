import { Grid } from '@material-ui/core';
import React from 'react';
import ProfileDrop from './ProfileDrop';
import SearchInput from './SearchInput';
import PopularMissions from './PopularMissions';

const RightMenu = () => {
    return(
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <ProfileDrop/>
            </Grid>
            <Grid item>
            <SearchInput/>
            </Grid>
            <Grid item>
                <PopularMissions/>
            </Grid>
        </Grid>
    )
}

export default RightMenu;