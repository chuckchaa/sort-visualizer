import { all } from 'redux-saga/effects'
import mergeSort from './sorting/mergeSort'
import control from './control'
import quickSort from './sorting/quickSort'
import shakerSort from './sorting/shakerSort'

export default function* rootSaga() {
  yield all([
    ...mergeSort,
    ...quickSort,
    ...shakerSort,
    ...control,
  ])
}
