import React from 'react';
import Banner from './Banner/BannerComponent';
import InfoColumn from './Info/InfoColumnComponent';
import TimelineColumn from './Timeline/TimelineColumnComponent';

const MainContentComponent = () => {
    return (
        <div className="center">
            <Banner/>
            <div className="main-content">
                <InfoColumn/>
                <TimelineColumn/>
            </div>
        </div>
    );
};

export default MainContentComponent;