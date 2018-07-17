import React, { Component } from 'react'
import Editor from '../components/whiteborad/Editor'




class Whiteboard extends Component {
  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  }
}

Whiteboard.propTypes = {