import {fromJS} from  'immutable';

const defaultState= fromJS({
    topicList:[{
        id: 1,
        title: 'Social Focus'
    },{
        id: 2,
        title: 'Reading'
    }],
    articleList:[
        {
        id: 1,
        title: '程序员的这把破烂不堪的椅子火了，网友：这是高手',
        desc: '程序员每天的工作都是写代码，虽然程序员很累，每天都要面对无休止的加班，但薪酬是业内公认的高，互联网公司办公环境都很好，一些设施自然安排的非常到位',
        imgUrl: '//upload-images.jianshu.io/upload_images/15631385-ad652855be50770e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '程序员的这把破烂不堪的椅子火了，网友：这是高手',
        desc: '程序员每天的工作都是写代码，虽然程序员很累，每天都要面对无休止的加班，但薪酬是业内公认的高，互联网公司办公环境都很好，一些设施自然安排的非常到位',
        imgUrl: '//upload-images.jianshu.io/upload_images/15631385-ad652855be50770e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '程序员的这把破烂不堪的椅子火了，网友：这是高手',
        desc: '程序员每天的工作都是写代码，虽然程序员很累，每天都要面对无休止的加班，但薪酬是业内公认的高，互联网公司办公环境都很好，一些设施自然安排的非常到位',
        imgUrl: '//upload-images.jianshu.io/upload_images/15631385-ad652855be50770e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 4,
        title: '程序员的这把破烂不堪的椅子火了，网友：这是高手',
        desc: '程序员每天的工作都是写代码，虽然程序员很累，每天都要面对无休止的加班，但薪酬是业内公认的高，互联网公司办公环境都很好，一些设施自然安排的非常到位',
        imgUrl: '//upload-images.jianshu.io/upload_images/15631385-ad652855be50770e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
]
   
});

export default (state= defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}