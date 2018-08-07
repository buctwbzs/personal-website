import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Head = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 68px;
  background: #FADB14;
  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    &:last-child{
      justify-content: space-start;
      >a{
        width: 20%;
        max-width: 100px;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        color: #AD6800;
        transition: color .2s ease-in, font-size .2s ease-in;
        &:hover {
          font-size: 1.4em;
          color: #613400;
        }
      }
    }
    >img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    } 
  }
`

class Header extends Component {


  render() {
    return (
      <Head>
        <div>
          <img src={`${static_url}logo.jpg`} alt="logo" />
        </div>
        <div>
          <a href="https://blog.buctwbzs.com" target="blog">Blog</a>
        </div>
      </Head>
    )
  }
}

Header.propTypes = {

}

export default Header