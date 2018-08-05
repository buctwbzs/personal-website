import { createActions } from 'redux-actions'

import {
  PUT_BLOG_START,
  PUT_BLOG_SUCCESS,
  PUT_BLOG_FAILURE
} from '../../types/draft/blog'

const {
  putBlogStart,
  putBlogSuccess,
  putBlogFailure
} = createActions({
  [PUT_BLOG_START]: (payload) => ({ payload }),
  [PUT_BLOG_SUCCESS]: (payload) => ({ payload }),
  [PUT_BLOG_FAILURE]: (payload) => ({ payload }),
})

export {
  putBlogStart,
  putBlogSuccess,
  putBlogFailure
}