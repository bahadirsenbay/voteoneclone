import React from 'react';
import Layout from './Layout';
import PostScreen from './PostScreen';
import PostAdd from './PostAdd';
import { isMobile } from 'react-device-detect';


const Home = () => {
    return(
        <Layout>
            { !isMobile && <PostAdd/>}
            
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
        </Layout>
        
    )
}

export default Home;