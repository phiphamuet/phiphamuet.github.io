import React from 'react';
import InfoItem from './InfoItemComponent';

const InfoColumnComponent = () => {
    const listInfo = [
        {
            icon: 'work',
            label: 'Tài xế tập sự tại',
            target: {
                href: '',
                name: 'xe ôm'
            }
        },
        {
            icon: 'work',
            label: 'Từng làm chuyên viên xách dép tại',
            target: {
                href: '',
                name: 'Passion Club - CLB Nghệ thuật PC'
            }
        },
        {
            icon: 'study',
            label: 'Từng học tại',
            target: {
                href: '',
                name: 'Trường Đại Học Công Nghệ - Đại học Quốc Gia Hà Nội (UET - VNU)'
            }
        },
        {
            icon: 'study',
            label: 'Đã học tại',
            target: {
                href: '',
                name: 'THPT Đan Phượng'
            }
        },
        {
            icon: 'stay',
            label: 'Sống tại',
            target: {
                href: '',
                name: 'Hà Nội'
            }
        },
        {
            icon: 'relation',
            label: 'Độc thân'
        },
        {
            icon: 'location',
            label: 'Đến từ',
            target: {
                href: '',
                name: 'Hà Nội'
            }
        },
        {
            icon: 'time',
            label: 'Đã tham gia Tháng 7 2010'
        }
    ];
    return (
        <div className="main-content__info">
            <div className="white-background px-15-padding border-block">
                <div className="main-content__info__label">
                    <label>
                        <i className="icon-world-blue "/>
                        <span className="main-content__info__label-header">Giới thiệu</span>
                    </label>
                    <div className="main-content__info__label-content">non block everything</div>
                </div>
                {
                    listInfo.map((item, index) =>
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

export default InfoColumnComponent;