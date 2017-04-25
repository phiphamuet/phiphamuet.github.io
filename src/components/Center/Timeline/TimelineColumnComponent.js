import React from 'react';
import FeedItem from './FeedItemComponent';

const TimeLineColumnComponent = () => {
    const user = "Phạm Hồng Phi";
    const data = [
        {
            "message": "Mva.microsoft.com",
            "created_time": "2017-04-14T21:45:56+0000",
            "id": "717861504932657_1467071490011651"
        },
        {
            "message": "Thằng ra sớm ko phải vì ko làm được bài mà là thằng đéo biết làm clg nữa :))",
            "created_time": "2017-04-14T02:40:34+0000",
            "id": "717861504932657_1466031643448969"
        },
        {
            "message": "loopbench\nkubernetes",
            "created_time": "2017-04-06T14:28:43+0000",
            "id": "717861504932657_1455106254541508"
        },
        {
            "message": "Cần nhượng lại con ram laptop gskill ddr3 1.35V 4gb bus 1k6 mua được hơn năm. còn bảo hành hơn năm nữa ở mai hoàng. AE nào cần thì liên hệ mình nhé :))",
            "created_time": "2017-03-29T15:55:19+0000",
            "id": "717861504932657_1445691845482949"
        },
        {
            "message": "https://www.sitepoint.com/test-react-components-jest/",
            "created_time": "2017-03-27T17:10:52+0000",
            "id": "717861504932657_1443629732355827"
        },
        {
            "message": "http://gameofflinehaychopc.com/download-battlefield-vietnam-chien-tranh-viet-nam/",
            "created_time": "2017-03-26T14:04:31+0000",
            "id": "717861504932657_1442498209135646"
        },
        {
            "message": "Nay đi về tình cờ đi sau một em áo trắng quần bò. Lâu lâu mới có cảm giác muốn theo đuổi cái gì đó. Nhưng mà đi xe máy chả nhẽ chặn người ta lại à. Thôi lần sau vậy :))",
            "created_time": "2017-03-21T14:27:35+0000",
            "id": "717861504932657_1437204239665043"
        },
        {
            "message": "http://codepen.io/desandro/pen/xZmROR",
            "created_time": "2017-03-21T02:09:25+0000",
            "id": "717861504932657_1436734793045321"
        },
        {
            "message": "http://codepen.io/gregh/pen/zNzvOm",
            "created_time": "2017-03-21T02:05:56+0000",
            "id": "717861504932657_1436733203045480"
        },
        {
            "message": "https://alemangui.github.io/pizzicato/",
            "created_time": "2017-03-21T01:58:00+0000",
            "id": "717861504932657_1436728283045972"
        },
        {
            "message": "Chả biết chỉ thấy ngon là ăn -_-",
            "created_time": "2017-03-20T13:10:38+0000",
            "id": "717861504932657_1436184603100340"
        }
    ];
    return (
        <div className="l-feeds">
            {
                data.map(item =>
                    <FeedItem user={user} {...item} key={item.id}/>
                )
            }
        </div>
    );
};

export default TimeLineColumnComponent;