import React, { Component } from 'react'
import styled from 'styled-components'

const IntroductionBox = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  >p{
    margin: 0;
    padding: 1em;
    line-height: 1.5em;
    font-size: 1.2rem;
    font-style: italic;
    text-align: justify;
    word-break: break-all;
    word-wrap: break-word;
    >a {
      color: #AD6800;
      cursor: pointer;
      transition: color .2s ease-in;
      &:hover {
        color: #613400;
      }
    }
  }
  @media (max-width: 899px) {
      height: 140px;
  }
  @media (max-width: 499px) {
      height: 180px;
  }
`
class Introduction extends Component {
  render() {
    return (
      <IntroductionBox>
        <p>
          This is my personal website. There are three versions of this website:&nbsp;
          <a href="#">React</a>,&nbsp;
          <a href="http://angular.buctwbzs.com">Angular</a>,&nbsp;
          <a href="#">Vue</a>;&nbsp;
          all websites use server-side rendering, and the source code is open(github).
          The current site built with <b>React</b>.
          If necessary,i hope you can create some new issues and help me improve them.
        </p>
      </IntroductionBox>
    )
  }
}



export default Introduction