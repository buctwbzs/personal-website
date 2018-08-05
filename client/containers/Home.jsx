import React, { Component } from 'react'
import Profile from '../components/home/Profile'
import Works from '../components/home/Works'
import Concat from '../components/home/Concat'
import { CommonBox } from '../components/common/CommonBox'

class Home extends Component {
  render() {
    return (
      <CommonBox>
        <Profile />
        <Concat />
        <Works />
      </CommonBox>
    )
  }
}


export default Home