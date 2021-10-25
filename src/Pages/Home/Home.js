import React from 'react';
import Steps from '../Shared/Steps/Steps';
import Banner from './Banner/Banner';
import Facilitys from './Facilities/Facilitys';
import HomeBlogs from './HomeBlog/HomeBlogs';
import HomeServices from './Services/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilitys></Facilitys>
            <HomeServices></HomeServices>
            <Steps></Steps>
            <HomeBlogs></HomeBlogs>
        </div>
    );
};

export default Home;


