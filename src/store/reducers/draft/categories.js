import { handleActions } from 'redux-actions'

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../../actions/draft/categories'

const initState = {
  loading: false,
  error: null,
  categories: []
}
const categoriesReducer = handleActions({
  [fetchCategoriesStart]: (state, { payload: { loading } }) => ({
    ...state,
    loading
  }),
  [fetchCategoriesSuccess]: (state, { payload: { loading, categories } }) => ({
    loading,
    categories
  }),
  [fetchCategoriesFailure]: (state, { payload: { loading, error } }) => ({
    ...state,
    loading,
    error
  })
}, initState)

export { categoriesReducer }