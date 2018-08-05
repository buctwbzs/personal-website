import { handleActions } from 'redux-actions'

import {
  putBlogStart,
  putBlogSuccess,
  putBlogFailure
} from '../../actions/draft/blog'


const initState = {
  loading: false,
  error: null,
  blog: {
    category: '',
    tags: [],
    content: ''
  }
}

const putBlogReducer = handleActions({
  [putBlogStart]: (state, { payload: { loading } }) => ({
    ...state,
    loading
  }),
  [putBlogSuccess]: (state, { payload: { loading } }) => ({
    ...state,
    loading
  }),
  [putBlogFailure]: (state, { payload: { loading } }) => ({
    ...state,
    loading
  }),
}, initState)

export default putBlogReducer