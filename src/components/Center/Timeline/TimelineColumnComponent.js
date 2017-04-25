import React from 'react';
import FeedItem from './FeedItemComponent';
import { connect } from 'react-redux';

const TimeLineColumnComponent = ({ feeds, name }) => {
    return (
        <div className="l-feeds">
            {
                feeds.map(item =>
                    <FeedItem user={name} {...item} key={item.id}/>
                )
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        feeds: state.feeds,
        name: state.user.name
    }
}

export default connect(mapStateToProps)(TimeLineColumnComponent);