import { createActions } from 'redux-actions'

import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../../types/draft/categories'


const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} = createActions({
  [FETCH_CATEGORIES_START]: () => ({
    loading: true
  }),
  [FETCH_CATEGORIES_SUCCESS]: categories => ({
    loading: false, categories
  }),
  [FETCH_CATEGORIES_FAILURE]: error => ({
    loading: false,
    error
  })
})

export {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
}