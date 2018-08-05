import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_CATEGORIES_START } from '../../types/draft/categories'
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../../actions/draft/categories'
import API from '../../../api/api'


export function* fetchCategories() {
  try {
    const data = yield call(API.fetchCategories)
    yield put(fetchCategoriesSuccess(data))
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

export default function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES_START, fetchCategories)
}