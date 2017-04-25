import React from 'react';
import NavList from './NavListComponent';
import Avatar from './../general/AvatarComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const BannerComponent = ({name, cover}) => {
    return (
        <div className="c-header">
            <a className="c-header__cover-wrapper">
                <img className="c-header__cover-wrapper__cover-image" src={cover} alt="my cover"/>
            </a>
            <Avatar/>
            <span className="c-header__username">
                {name}
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

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.user.name,
        cover: state.user.cover
    }
}

export default withRouter(connect(mapStateToProps)(BannerComponent));