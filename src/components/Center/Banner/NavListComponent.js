import React from 'react';
import ActiveLinkWrapper from './ActiveLinkWrapper';

const NavListComponent = () => {
    return (
        <div className="c-header__nav-wrapper">
            <div className="c-header__nav-list border-block">
                <ActiveLinkWrapper path="/" label="Dòng thời gian"/>
                <ActiveLinkWrapper path="/about" label="Giới thiệu"/>
                <ActiveLinkWrapper path="/friends" label="Bạn bè"/>
                <ActiveLinkWrapper path="/photos" label="Ảnh"/>
                <ActiveLinkWrapper path="/mores" label="Xem thêm"/>
            </div>
        </div>
    );
};

export default NavListComponent;