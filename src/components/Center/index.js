import React from 'react';
import Banner from './Banner/BannerComponent';
import InfoColumn from './Info/InfoColumnComponent';
import TimelineColumn from './Timeline/TimelineColumnComponent';
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
            <Route path="/about" render={() => {
                return <div>Demacia</div>
            }}/>
        </div>
    );
};

export default MainContentComponent;