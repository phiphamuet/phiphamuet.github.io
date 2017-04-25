import React from 'react';
import InfoItem from './InfoItemComponent';
import { connect } from 'react-redux';

const InfoColumnComponent = ({infos}) => {
    return (
        <div className="c-info">
            <div className="u-white-background u-padding-15px border-block">
                <div className="c-info__label">
                    <label>
                        <i className="icon-world-blue "/>
                        <span className="c-info__label-header">Giới thiệu</span>
                    </label>
                    <div className="c-info__label-content">non block everything</div>
                </div>
                {
                    infos.map((item, index) =>
                        <InfoItem
                            key={index}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        infos: state.user.infos
    }
}

export default connect(mapStateToProps)(InfoColumnComponent);