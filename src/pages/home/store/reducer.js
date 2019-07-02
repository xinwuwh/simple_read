import {fromJS} from  'immutable';

const defaultState= fromJS({
    topicList:[],

    articleList:[],

    recommendList:[{
        id: 1,
        title: 'Membership',
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4228765987,991991179&fm=26&gp=0.jpg'
    },{
        id: 2,
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4228765987,991991179&fm=26&gp=0.jpg'
    },{
        id: 3,
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4228765987,991991179&fm=26&gp=0.jpg'
    },{
        id: 4,
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4228765987,991991179&fm=26&gp=0.jpg'
    }],

    writerList:[{
        id: 1,
        name: 'Sakura',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },{
        id: 2,
        name: 'Sakura',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
]

   
});

export default (state= defaultState, action) => {
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),

            })
        default:
            return state;
    }
}