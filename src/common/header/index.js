import React, {Component } from 'react';
import {HeaderWrapper,Logo,Nav, NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { GlobalStyle } from '../../statics/iconfont/iconfont';


class Header extends Component{

    render(){
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
                    <NavSearch></NavSearch>
                    <i className="iconfont">&#xe633;</i>
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
        )
    }
}

export default Header;