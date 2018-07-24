import React, { Component } from 'react'
import styled from 'styled-components'
import me from '../../public/image/me.gif'


const ProfileBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 440px;
  >p{
    padding: 0 1em;
    text-align: center;
    line-height: 1.5em;
    color: #33344D;
    &:first-of-type{
      font-size: 28px;
      font-family: PingFangSC-Light;
    }
    &:last-child{
      margin-top: 0;
      font-size: 20px;
      font-family: PingFangSC-Thin;
    }
    @media (max-width: 899px) {
      &:first-of-type{
        margin-bottom: .5em;
        font-size: 18px;
      }
    }
    &:last-child{
      font-size: 16px;
    }
  }
`
class Profile extends Component {

  render() {
    return (
      <ProfileBox>
        <img src={me} alt="me" />
        <p>如果你无法简洁的表达你的想法，那只能说明你还不够了解它</p>
        <p>- 阿尔伯特·爱因斯坦</p>
      </ProfileBox>
    )
  }
}



export default Profile