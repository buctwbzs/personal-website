import React, { Component } from 'react'
import Profile from '../components/home/Profile'
import Works from '../components/home/Works'
import Concat from '../components/home/Concat'
import { CommonBox } from '../components/common/CommonBox'
import Introduction from '../components/home/Introduction'

class Home extends Component {
  render() {
    return (
      <CommonBox>
        <Profile />
        <Introduction />
        <Concat />
        <Works />
      </CommonBox>
    )
  }
}


export default Home