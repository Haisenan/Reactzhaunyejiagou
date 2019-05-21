import styled from 'styled-components';
import logo from '../../statics/logo.png';


  export const HeaderWrapper = styled.div`
    position:relative;
    width：100%;
    height:58px;
    border-bottom:1px solid #f0f0f0;
  `;

  export const Logo = styled.a.attrs({
    href:'/'
  })`
    width:100px;
    height:58px;
    position:absolute;
    left0;
    top:0;
    display:block;
    background:url(${logo});
    background-size:contain;
    float:left;
  `;

  export const Nav = styled.div`
      width: 960px;
      height: 58px;
      padding-right: 70px;
      box-sizing: border-box;
      margin: 0 auto;
  `;
  export const NavItem = styled.div`
  padding: 0px 18px;
    text-align:center;
    line-height:58px;
    cursor:pointer;
    font-size:17px;
    font-family:'微软雅黑';

    &.left {
      float:left;
    }
    &.right {
      float:right;
      color:#969696;
    }
    &.active {
      color:#ea6f5a;
    }
  `;

    export const NavSearch = styled.input.attrs({
      placeholder:' 搜索'
    })`
      padding:0 56px 0 20px;
      background:#eee;
      margin-top:10px;
      width:100px;
      font-size:14px;
      border:0px solid #c0c0c0;
      border-radius:35px;
      line-height:38px;
      &::placeholder{
        color:#999;
      }
      &.focus{
        width:170px;
      }
      &.slide-enter{
        width:170px;
        transition:all .5s ease-out;
      }

      &.slide-enter-active{
        width:180px;
      }

      &.slide-exit{
        width:180px;
        transition:all .3s ease-out;
      }

      &.slide-exit-active{
        width:170px;
          opacity:0;
      }
    `;

    export const SearchContentList = styled.div`
      width:250px;
      position:absolute;
      left:0;
      top:59px;
      padding-bottom:30px;
      box-shadow: 0 0 8px rgba(0,0,0,.2);
      background:#fff;

    `;

    export const SearchTitle = styled.span`
        float:left;
        font-size: 14px;
        color: #969696;
        line-height:20px;
        padding:10px 20px;
        box-sizing: border-box;
    `;

    export const SearchList = styled.div`
      clear:both;
      padding:0px 20px;


    `;
    export const SearchListItem = styled.a`
      border: 1px solid #ddd;
      padding:2px 5px;
      line-height:20px;
      float:left;
      margin:4px;
      color:#787878;
      border-radius: 3px;
    `;


    export const SearchSpan = styled.a`
        float:right;
        font-size: 14px;
        color: #969696;
        line-height:20px;
        padding:10px 20px;
        box-sizing: border-box;

    `;

    export const PerBao = styled.div`
      position:relative;
      float:left;
      height:18px;



      .iconfont{
        position:absolute;
        right:10px;
        top:10px;
        padding:10px;

        &.focus{
          line-height:17px;
          border-radius:49%;
          background:#999;
          color:white;

        }
      }
    `


    export const Action = styled.div`
      position:absolute;
      right:0;
      top:0;
      & a{
          font-size:15px;

      }
    `;

    export const Register = styled.a`
    float:right;
       margin:10px;
       height:38px;
       width:90px;
       display:block;
       border:1px solid #ec6149;
       border-radius:19px;
       line-height:38px;
       text-align:center;
     `;

     export const CodeArt = styled.a`
     float:right;
        margin:10px;
        height:38px;
        width:90px;
        color:white;
        display:block;
        background:#ea6f5a;
        border-radius:19px;
        line-height:38px;
        text-align:center;
      `;
