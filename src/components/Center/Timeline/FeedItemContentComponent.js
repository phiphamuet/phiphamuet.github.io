import React from 'react';

const FeedItemContentComponent = ({ message }) => {
    return (
        <div className="c-feed-item__content">
            <div className="c-feed-item__message">
                {message}
            </div>
            <div className="c-feed-item__action">
                <a className="like-container">
                    <i className="like-icon"></i>
                    Thích
                </a>
                <a className="comment-container">
                    <i className="comment-icon"></i>
                    Bình luận
                </a>
            </div>
        </div>
    );
};

export default FeedItemContentComponent;