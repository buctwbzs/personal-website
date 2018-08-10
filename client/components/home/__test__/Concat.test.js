import React from 'react'
import renderer from 'react-test-renderer'
import Concat from '../Concat'

it('Concat renders correctly', () => {
  const tree = renderer.create(<Concat />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})