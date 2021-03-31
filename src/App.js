import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { isMobile } from 'react-device-detect';
import Home from './components/Home'
import NotifiComp from './components/NotifiComp'
import theme from './theme'
import { CssBaseline } from '@material-ui/core';
import BottomNav from './components/BottomNav';
import ProfileScreen from './components/ProfileScreen';


const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/notifications" component={NotifiComp}/>
                            <Route path="/profile" component={ProfileScreen}/>
                        </Switch>
                    </BrowserRouter>
                    { isMobile && <BottomNav/>}
                </CssBaseline>
        </ThemeProvider>   
        
    )
}

export default App;