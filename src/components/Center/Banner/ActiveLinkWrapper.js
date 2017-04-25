import React from 'react';
import { Route, Link } from 'react-router-dom';

const ActiveLinkWrapper = ({path, label}) => {
    return (
        <Route path={path} exact={true} children={
            ({ match }) => {
                if (match) return <Link to={path} className="active border-block">{label}</Link>
                return <Link to={path} className="border-block">{label}</Link>
            }
        } />
    );
};

export default ActiveLinkWrapper;