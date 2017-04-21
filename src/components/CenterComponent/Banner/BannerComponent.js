import React from 'react';
import NavList from './NavListComponent';
import Avatar from './AvatarComponent';

const BannerComponent = () => {
    return (
        <div className="center__header">
            <a className="center__header__cover-wrapper">
                <img className="center__header__cover-wrapper__cover-image" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/14479517_1288375511214584_9183673114872783494_n.jpg?oh=ce8f93419f989040d85c28800cb4acc9&oe=5996A4FC" alt="my cover"/>
            </a>
            <Avatar parentClass="center__header"/>
            <span className="center__header__username">
                Phạm Hồng Phi
            </span>
            <div className="center__header__update-info-wrapper">
                <button className="center__header__update-info-button">Cập nhật thông tin</button>
            </div>
            <div className="center__header__diary-activity-wrapper">
                <button>Xem nhật ký hoạt động</button>
                <button>...</button>
            </div>
            <NavList />
        </div>
    );
};

export default BannerComponent;