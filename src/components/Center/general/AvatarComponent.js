import React from 'react';

const AvatarComponent = ({avatar = "http://graph.facebook.com/717861504932657/picture?type=large"}) => {
    return (
        <a className="c-avatar__avatar-wrapper">
            <img className="c-avatar__avatar-image" src={avatar} alt="my avatar"/>
        </a>
    );
};

export default AvatarComponent;