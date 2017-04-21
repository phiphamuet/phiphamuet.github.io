import React from 'react';
import Avatar from './../Banner/AvatarComponent';

const HeaderFeedItemComponent = ({user}) => {
    return (
        <div className="feed-item__header">
            <Avatar parentClass="feed-item__header"/>
            <a className="feed-item__header__username" href="">Phạm Hồng Phi</a>
            <small className="feed-item__header__created-time">15 tháng 4 lúc 4:45</small>
        </div>
    );
};

export default HeaderFeedItemComponent;