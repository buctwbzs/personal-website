import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardBox = styled.div`
  display: flex;
`

class BlogCard extends Component {

  static propTypes = {
    blog: PropTypes.object.isRequired
  }

  render() {
    const { blog: {
      id,
      title,
      author,
      image,
      createTime,
      content
    } } = this.props

    return (
      <CardBox>
        <Link
          to={`${id}4`}
        >
          <div>
            <img
              src={image}
              alt="blog_thumbnail"
            />
          </div>
          <h6>
            {title}
          </h6>
          <p>
            {content}
          </p>
          <p>
            {author}发表于&nbsp;&nbsp;{createTime}
          </p>
        </Link>
      </CardBox >
    )
  }
}



export default BlogCard
