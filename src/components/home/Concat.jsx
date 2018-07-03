import React, { Component } from 'react'
import styled from 'styled-components'
import twitter from '../../public/image/twitter.png'
import twitterHover from '../../public/image/twitter-hover.png'
import github from '../../public/image/github.png'
import githubHover from '../../public/image/github-hover.png'
import ins from '../../public/image/ins.png'
import insHover from '../../public/image/ins-hover.png'
import email from '../../public/image/email.png'
import emailHover from '../../public/image/email-hover.png'


const ConcatBox = styled.section`
  display: flex;
  justify-content: center;
  height: 120px;
  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 120px;
    >a{
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    >a:first-child{
      background: url(${twitter});
      &:hover{
        background: url(${twitterHover});
      }
    }
    >a:nth-child(2){
     
      background: url(${github});  
      &:hover{
        background: url(${githubHover});
      }
    }
    >a:nth-child(3){
      background: url(${ins});
      &:hover{
        background: url(${insHover});
      }
    }
    >a:last-child{
      background: url(${email});
      &:hover{
        background: url(${emailHover});
      }
    }
  }
`


class Concat extends Component {
  render() {
    return (
      <ConcatBox>
        <div>
          <a href="https://twitter.com/buctwbzs" />
          <a href="https://github.com/buctwbzs" />
          <a href="" />
          <a href="mailto:buctwbzs@gmail.com" />
        </div>
      </ConcatBox>
    )
  }
}

Concat.propTypes = {

}

export default Concat