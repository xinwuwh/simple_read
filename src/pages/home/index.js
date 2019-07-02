import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://www.sciencenews.org/sites/default/files/styles/homepage-hero-4a-0/public/2019/06/main/articles/062619_lg_eclipse_feat.jpg?itok=75f1hAol"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result= res.data.data;
            const action={
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action);
        })

    }
}
const mapDispatch=(dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }

});


export default connect(null,mapDispatch)(Home);