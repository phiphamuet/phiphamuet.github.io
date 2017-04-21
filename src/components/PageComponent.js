import React from 'react';
import Center from './CenterComponent';
import RightAddon from './RightAddonComponent';

const PageComponent = () => {
    return (
        <div className="page">
            <Center />
            <RightAddon />
        </div>
    );
};

export default PageComponent;