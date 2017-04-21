import React from 'react';
import FeedItemHeader from './FeedItemHeaderComponent';
import FeedItemContent from './FeedItemContentComponent';

const FeedItemComponent = ({user, message, created_time, id}) => {
    return (
        <div className="main-content__timeline__item white-background px-10-padding-top px-10-padding-left px-10-padding-right border-block feed-item">
            <FeedItemHeader />
            <FeedItemContent message={message}/>
        </div>
    );
};

export default FeedItemComponent;