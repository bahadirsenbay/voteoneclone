import React from 'react';
import Layout from './Layout';
import PostScreen from './PostScreen';
import PostAdd from './PostAdd';


const Home = () => {
    return(
        <Layout>
            <PostAdd/>
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
            <PostScreen/>
        </Layout>
        
    )
}

export default Home;