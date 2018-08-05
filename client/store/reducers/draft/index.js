import { combineReducers } from 'redux'

import { categoriesReducer as categories } from './categories'

const draftStore = combineReducers({
  categories
})

export default draftStore