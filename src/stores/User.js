const UserInitialState = {
    name: 'Phạm Hồng Phi',
    cover: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/14479517_1288375511214584_918367' +
            '3114872783494_n.jpg?oh=ce8f93419f989040d85c28800cb4acc9&oe=5996A4FC',
    avatar: 'http://graph.facebook.com/717861504932657/picture?type=large',
    infos: [
        {
            icon: 'work',
            label: 'Tài xế tập sự tại',
            target: {
                href: '',
                name: 'xe ôm'
            }
        }, {
            icon: 'work',
            label: 'Từng làm chuyên viên xách dép tại',
            target: {
                href: '',
                name: 'Passion Club - CLB Nghệ thuật PC'
            }
        }, {
            icon: 'study',
            label: 'Từng học tại',
            target: {
                href: '',
                name: 'Trường Đại Học Công Nghệ - Đại học Quốc Gia Hà Nội (UET - VNU)'
            }
        }, {
            icon: 'study',
            label: 'Đã học tại',
            target: {
                href: '',
                name: 'THPT Đan Phượng'
            }
        }, {
            icon: 'stay',
            label: 'Sống tại',
            target: {
                href: '',
                name: 'Hà Nội'
            }
        }, {
            icon: 'relation',
            label: 'Độc thân'
        }, {
            icon: 'location',
            label: 'Đến từ',
            target: {
                href: '',
                name: 'Hà Nội'
            }
        }, {
            icon: 'time',
            label: 'Đã tham gia Tháng 7 2010'
        }
    ]
}
const User = (state = UserInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default User;