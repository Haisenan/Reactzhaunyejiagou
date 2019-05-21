import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Action,
  Register,
  CodeArt,
  NavSearch,
  PerBao,
  SearchContentList,
  SearchTitle,
  SearchSpan,
  SearchList,
  SearchListItem



} from './style';

import { CSSTransition } from 'react-transition-group';
import { createStore } from 'redux';
import {connect} from 'react-redux';
import {GlobalStyle} from '../../statics/iconfont';

import {
  actionCreators
} from './store';
 
{
  // 无状态组件
}

  const SearchTips=(show)=>{
    if(show){
      return(
          <SearchContentList>
             <SearchTitle>热门搜索</SearchTitle>
             <SearchSpan>换一批</SearchSpan>
             <SearchList>
                <SearchListItem>区块链</SearchListItem>
                <SearchListItem>小程序</SearchListItem>
                <SearchListItem>vue</SearchListItem>
                <SearchListItem>flutter</SearchListItem>
                <SearchListItem>毕业</SearchListItem>
                <SearchListItem>PHP故事</SearchListItem>
                <SearchListItem>生活读物</SearchListItem>
                <SearchListItem>美食</SearchListItem>
                <SearchListItem>投稿</SearchListItem>

              </SearchList>
          </SearchContentList>
      )
    }else{
      return null; 
    }
  }
 const Header = (props)=>{
  return(

      <HeaderWrapper>
      <GlobalStyle/>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">关注</NavItem>
          <NavItem className="left">消息</NavItem>

          <PerBao>
            {
                //input 搜索框
            }
            <CSSTransition
              in={props.focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onFocus={props.handleInputFocus.bind(this)}
                onBlur={props.handleInputBlur.bind(this)}
                className={props.focus?'focus':''}
               ></NavSearch>
             </CSSTransition>
            {
                //字体图标
            }
            <i className={props.focus?'iconfont focus':'iconfont'}>&#xe614;</i>

            {
              SearchTips(props.focus)
            }

          </PerBao>



          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <Action>

            <CodeArt className="right">
                <i className="iconfont">&#xe615;</i>写文章
            </CodeArt>
            <Register className="right">
              注册
            </Register>
          </Action>

        </Nav>
      </HeaderWrapper>
    )
 }

const mapStateToProps = (state)=>{
    return{

      focus:state.getIn(['header','focus'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{

       handleInputFocus(){
           dispatch(actionCreators.inputFocus());
        },

        handleInputBlur(){
           dispatch(actionCreators.inputBlur());
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
