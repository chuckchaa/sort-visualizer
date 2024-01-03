import { put, select, takeLatest, all } from 'redux-saga/effects'

import { setArray, setArrayLength } from '../arraySettings/slice'
import { createArray } from '../../utils'
import { reset } from '../sortProcess/slice'

function* resetArray() {
  const arrayLength = yield select(
    ({ arraySettings }) => arraySettings.arrayLength
  )

  yield all([put(reset()), put(setArray(createArray(arrayLength)))])
}

function* setArrayLengthFunc({ value }) {
  yield put(setArrayLength(value))
  yield resetArray()
}

export default [
  takeLatest('CONTROLS/RESET_ARRAY', resetArray),
  takeLatest('CONTROLS/SET_ARRAY_LENGTH', setArrayLengthFunc),
]
