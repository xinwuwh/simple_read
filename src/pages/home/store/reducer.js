import {fromJS} from  'immutable';

const defaultState= fromJS({
    topicList:[{
        id: 1,
        title: 'Social Focus'
    },{
        id: 2,
        title: 'Reading'
    }]
   
});

export default (state= defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}