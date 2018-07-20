import { call, put, takeEvery } from 'redux-saga/effects'
import { PUT_BLOG_START } from '../../types/draft/blog'
import { putBlogSuccess, putBlogFailure } from '../../actions/draft/blog'
import API from '../../../api/api'


export function* putBlog(actions) {

  const data = actions.payload
  try {
    const res = yield call(API.putBlog, data)
    yield put(putBlogSuccess(res))
  } catch (error) {
    yield put(putBlogFailure(error))
  }
}

export default function* watchFetchCategories() {
  yield takeEvery(PUT_BLOG_START, putBlog)
}