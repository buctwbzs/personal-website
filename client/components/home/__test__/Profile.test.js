import React from 'react'
import renderer from 'react-test-renderer'
import Profile from '../Concat'

it('Profile renders correctly', () => {
  const tree = renderer.create(<Profile />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})