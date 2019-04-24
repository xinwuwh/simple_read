import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper= styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo= styled.a.attrs({
    href: '/'
})`
    position: absolute;
    padding: 0 15px;
    display: block;
    width: 100px;
    height: 56px;
    color: #ea6f5a;
    font-size: 24px;
    margin-top: 15px;
    margin-left: 10px;
    white-space: nowrap;
    text-decoration: none;
    background-size: contain;
`;
//   background: url(${logoPic});
export const Nav = styled.div`
    width: 945px;
    margin: 0 auto;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;

`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    front-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;

    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height:30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outlibe: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14 px;
    color:#666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 240px;

    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;

    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0 ;
    top: 56px;
    width: 240px;
    padding 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right
`;
export const SearchInfoList = styled.div`
    overflow: hiddern;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;


export const Addition = styled.div`
    position: absolute;
    right: 0 ;
    top 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        background:#ec6149;
        color: #fff;
    }
 
`;

