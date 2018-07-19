import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TagsBox = styled.div`
  display: flex;
`
const ThemedLink = Link

class Tags extends Component {

  static propTypes = {
    tags: PropTypes
  }


  render() {

    const { tags } = this.props

    return (
      <TagsBox>
        {tags.map(({ id, name }) => (
          <ThemedLink
            key={id}
            to="244"
          >
            {name}
          </ThemedLink>
        ))}
      </TagsBox>
    )
  }
}


export default Tags
