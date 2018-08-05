import React, { Component } from 'react'
import styled from 'styled-components'

const ProfileBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  width: 100%;
  height: 440px;
  >p{
    padding: 0 1em;
    text-align: center;
    line-height: 1.5em;
    color: #33344D;
    &:first-of-type{
      font-size: 2rem;
    }
    &:last-child{
      margin-top: 0;
      font-size: 1.5rem;
    }
    @media (max-width: 899px) {
      &:first-of-type{
        font-size: 1.4rem;
      }
      &:last-child{
      font-size: 1.2rem;
      }
    }
  }
`
class Profile extends Component {

  render() {
    return (
      <ProfileBox>
        <img src={`${static_url}me.gif`} alt="me" />
        <p>如果你无法简洁的表达你的想法，那只能说明你还不够了解它</p>
        <p>- 阿尔伯特·爱因斯坦</p>
      </ProfileBox>
    )
  }
}



export default Profile