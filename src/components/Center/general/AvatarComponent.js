import React from 'react';

const AvatarComponent = ({parentClass, avatar = "http://graph.facebook.com/717861504932657/picture?type=large"}) => {
    return (
        <a className={`${parentClass || ''}__avatar-wrapper`}>
            <img className={`${parentClass || ''}__avatar-wrapper__avatar-image`} src={avatar} alt="my avatar"/>
        </a>
    );
};

export default AvatarComponent;