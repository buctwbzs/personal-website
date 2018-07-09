import React, { Component } from 'react'
import Editor from '../components/draft/Editor'
import styled from 'styled-components'

const DraftBox = styled.div`
  display: flex;
  justify-content: center;
`


class Draft extends Component {
  render() {
    return (
      <DraftBox>
        <Editor
        />
      </DraftBox>
    )
  }
}

Draft.propTypes = {

}

export default Draft