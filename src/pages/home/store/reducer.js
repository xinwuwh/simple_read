import {fromJS} from  'immutable';

const defaultState= fromJS({
    topicList:[],

    articleList:[],

    recommendList:[],

    writerList:[{
        id: 1,
        name: '梅拾璎',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
        id: 2,
        name: '梅拾璎',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },{
        id: 3,
        name: '梅拾璎',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },{
        id: 4,
        name: '梅拾璎',
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
                recommendList: fromJS(action.recommendList)

            })
           

        default:
            return state;
    }
}