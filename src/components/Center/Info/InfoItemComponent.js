import React from 'react';

const InfoItemComponent = ({icon, label, target, children}) => {
    return (
        <div className="c-info-item">
            <i className={`info-icon ${icon}`}></i>
            <span>
                {label} {''}
                {target && <a href={target.href}>{target.name}</a>}
                {children}
            </span>
        </div>
    );
};

export default InfoItemComponent;