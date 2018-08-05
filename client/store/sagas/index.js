import { all, fork } from 'redux-saga/effects'
import draftRootSage from './draft'

export default function* rootSaga() {
  yield all([
    fork(draftRootSage)
  ])
}