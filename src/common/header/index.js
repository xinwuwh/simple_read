import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {HeaderWrapper,Logo,Nav, NavItem,NavSearch,Addition,Button,SearchWrapper, 
    SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';
import { GlobalStyle } from '../../statics/iconfont/iconfont';

const getListArea=(show)=>{
    if (show){
        return(
            <SearchInfo>
                <SearchInfoTitle>
                    Hot Searches
                    <SearchInfoSwitch>Switch Others</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>Education</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                    <SearchInfoItem>Jobs</SearchInfoItem>
                </SearchInfoList>

            </SearchInfo>
        )

    }else {
        return null;
    }
}

const Header= (props)=>{
    return (
        <HeaderWrapper>
            <GlobalStyle />
            <Logo>Simple Reading</Logo>
            <Nav> 
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download APP</NavItem>
                <NavItem className='right'>Sign in</NavItem>
                <NavItem className='right'> 
                <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                    timeout={200}
                    in={props.focused}
                    classNames="slide"
                    
                    >
                    <NavSearch 
                    className={props.focused ? 'focused' : ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                    ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
                    &#xe633;</i>
                    {getListArea(props.focused)}
                    
                </SearchWrapper>
                
            </Nav>
            <Addition>   
                <Button className='writing'>
                <i className="iconfont">&#xe624;</i>
                Writing
                </Button>
                <Button className='reg'>Sign up</Button>
            </Addition>
        </HeaderWrapper>
    );

}


const mapStateToProps=(state)=>{
    return {
        focused: state.getIn(['header','focused'])
        //state.get('header').get('focused')
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Header);