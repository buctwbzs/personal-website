import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-router-dom'
import { Link } from 'react-router-dom'

const CategoriesBox = styled.div`

`

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired
  }

  render() {

    const { categories } = this.props

    return (
      <CategoriesBox>
        <h6>文章分类</h6>
        {categories.map(({ id, name }) => (
          <Link
            key={id}
            to="blogs"
          >
            {name}
          </Link>
        ))}
      </CategoriesBox>
    )
  }
}



export default Categories