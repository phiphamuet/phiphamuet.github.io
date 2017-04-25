import React from 'react';
import Banner from './Banner/BannerComponent';
import InfoColumn from './Info/InfoColumnComponent';
import TimelineColumn from './Timeline/TimelineColumnComponent';
import About from './About';
import { Route } from 'react-router-dom';

const MainContentComponent = () => {
    return (
        <div className="center">
            <Banner/>
            <Route exact path="/" render={() => {
                return <div className="main-content">
                    <InfoColumn/>
                    <TimelineColumn/>
                </div>
            }}/>
            <Route path="/about" component={About}/>
            <Route path="/friends" component={About}/>
            <Route path="/photos" component={About}/>
            <Route path="/mores" component={About}/>
        </div>
    );
};

export default MainContentComponent;