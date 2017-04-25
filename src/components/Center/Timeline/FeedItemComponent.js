import React from 'react';
import FeedItemHeader from './FeedItemHeaderComponent';
import FeedItemContent from './FeedItemContentComponent';

const FeedItemComponent = ({user, message, created_time, id}) => {
    return (
        <div className="white-background border-block c-feed-item">
            <FeedItemHeader created_time={created_time}/>
            <FeedItemContent
                message={message}/>
        </div>
    );
};

export default FeedItemComponent;