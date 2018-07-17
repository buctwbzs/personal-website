import { all, fork } from 'redux-saga/effects'
import watchFetchCategories from './categories'


export default function* draftRootSage(){
  yield all([
    fork(watchFetchCategories)
  ])
}