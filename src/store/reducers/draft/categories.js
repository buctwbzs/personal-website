import { handleActions } from 'redux-actions'

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../../actions/draft/categories'

const initState = {
  loading: false,
  categories: []
}
const categoriesReducer = handleActions({
  [fetchCategoriesStart]: (state, { payload: { loading } }) => ({
    loading
  }),
  [fetchCategoriesSuccess]: (state, { payload: { loading, categories } }) => ({
    loading,
    categories
  }),
  [fetchCategoriesFailure]: (state, { payload: { loading } }) => ({
    loading
  })
}, initState)

export { categoriesReducer }