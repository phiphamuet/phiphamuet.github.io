import React from 'react';
import NavList from './NavListComponent';
import Avatar from './../general/AvatarComponent';

const BannerComponent = () => {
    return (
        <div className="c-header">
            <a className="c-header__cover-wrapper">
                <img className="c-header__cover-wrapper__cover-image" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/14479517_1288375511214584_9183673114872783494_n.jpg?oh=ce8f93419f989040d85c28800cb4acc9&oe=5996A4FC" alt="my cover"/>
            </a>
            <Avatar parentClass="c-header"/>
            <span className="c-header__username">
                Phạm Hồng Phi
            </span>
            <div className="c-header__update-info-wrapper">
                <button className="c-header__update-info-button">Cập nhật thông tin</button>
            </div>
            <div className="c-header__diary-activity-wrapper">
                <button>Xem nhật ký hoạt động</button>
                <button>...</button>
            </div>
            <NavList />
        </div>
    );
};

export default BannerComponent;