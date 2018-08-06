import React from 'react'
import renderer from 'react-test-renderer'
import Works from '../Works'

it('Works renders correctly', () => {
  const tree = renderer.create(<Works />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})