import React,{Component} from 'react';
import {WriterWrapper,WriterItem} from '../style';
import {connect} from 'react-redux';

class Writer extends Component {
    render(){
        return (
            <WriterWrapper>
                {this.props.list.map((item)=>{
                    return (
                        <WriterItem key={item.get('id')}>
                           <img alt='' className='ava' src={item.get('imgUrl')}/>
                           {item.get('name')}
                            
                        
                        </WriterItem>
                    )
                })}
            </WriterWrapper>
        )
    }
}

const mapState=(state)=>({
    list: state.getIn(['home','writerList'])

})

export default connect(mapState,null)(Writer);