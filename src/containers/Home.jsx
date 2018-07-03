import React, { Component } from 'react'
import Profile from '../components/home/Profile'
import Cartoon from '../components/home/Cartoon'
import Concat from '../components/home/Concat'

class Home extends Component {
  render() {
    return (
      <div>
        <Profile />
        <Concat />
        <Cartoon />
      </div>
    )
  }
}


export default Home