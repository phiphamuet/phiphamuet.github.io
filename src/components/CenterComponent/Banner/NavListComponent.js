import React from 'react';

const NavListComponent = () => {
    return (
        <div className="center__header__nav-wrapper">
            <div className="center__header__nav-list border-block">
                <button className="active">Dòng thời gian</button>
                <button>Giới thiệu</button>
                <button>Bạn bè</button>
                <button>Ảnh</button>
                <button>Xem thêm</button>
            </div>
        </div>
    );
};

export default NavListComponent;