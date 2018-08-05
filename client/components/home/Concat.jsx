import React, { Component } from 'react'
import styled from 'styled-components'

const ConcatBox = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
  >div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 120px;
    >a{
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    >a:first-child{
      background: url(${static_url}/twitter.png);
      &:hover{
        background: url(${static_url}/twitter-hover.png);
      }
    }
    >a:nth-child(2){
     
      background: url(${static_url}github.png);  
      &:hover{
        background: url(${static_url}github-hover.png);
      }
    }
    >a:nth-child(3){
      background: url(${static_url}ins.png);
      &:hover{
        background: url(${static_url}ins-hover.png);
      }
    }
    >a:last-child{
      background: url(${static_url}email.png);
      &:hover{
        background: url(${static_url}email-hover.png);
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
          <a href="https://www.instagram.com/buctwbzs/" />
          <a href="mailto:buctwbzs@gmail.com" />
        </div>
      </ConcatBox>
    )
  }
}

Concat.propTypes = {

}

export default Concat