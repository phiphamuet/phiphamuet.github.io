import React from 'react';
import Avatar from './../general/AvatarComponent';

const HeaderFeedItemComponent = ({user, created_time}) => {
    const created = new Date(created_time);
    return (
        <div className="c-feed-item__header">
            <Avatar parentClass="c-feed-item"/>
            <a className="c-feed-item__username" href="">Phạm Hồng Phi</a>
            <small className="c-feed-item__created-time">{created.getDate()} tháng {created.getMonth()} lúc {created.getHours()}:{created.getMinutes()}</small>
        </div>
    );
};

export default HeaderFeedItemComponent;