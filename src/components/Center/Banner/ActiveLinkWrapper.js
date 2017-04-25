import React from 'react';
import { Route, Link } from 'react-router-dom';

const ActiveLinkWrapper = ({path, label}) => {
    return (
        <Route path={path} exact={true} children={
            ({ match }) => {
                console.log(match);
                if (match) return <Link to={path} className="active c-header__nav-item border-block">{label}</Link>
                return <Link to={path} className="c-header__nav-item border-block">{label}</Link>
            }
        } />
    );
};

export default ActiveLinkWrapper;