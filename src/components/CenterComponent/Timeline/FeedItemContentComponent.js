import React from 'react';

const FeedItemContentComponent = ({ message }) => {
    return (
        <div className="feed-item__content">
            <div className="feed-item__content__message">
                {message}
            </div>
            <div className="feed-item__content__action">
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