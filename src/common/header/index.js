import React, {Component } from 'react';
import {HeaderWrapper,Logo,Nav, NavItem,NavSearch,Addition,Button} from './style'

class Header extends Component{

    render(){
        return (
            <HeaderWrapper>
                <Logo>Simple Reading</Logo>
                <Nav> 
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download APP</NavItem>
                    <NavItem className='right'>Sign in</NavItem>
                    <NavItem className='right'> Aa</NavItem>
                    <NavSearch></NavSearch>
                    
                </Nav>
                <Addition>   
                    <Button className='writing'>Writing</Button>
                    <Button className='reg'>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;