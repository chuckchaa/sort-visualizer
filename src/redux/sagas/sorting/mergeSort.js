import { select, put, race, take, takeLatest } from 'redux-saga/effects'

import {
  startSorting,
  setNewParams,
  setPause,
  afterSuccessSorting,
  SPEED_MULTIPLIER,
} from './sorting'
import { reset, setActiveElements } from '../../sortProcess/slice'


function* mergeSortHelper() {
  const array = yield select(({ arraySettings }) => arraySettings.array)

  yield startSorting()

  const mainArray = array.slice()
  const auxiliaryArray = array.slice()

  const { success } = yield race({
    success: mergeSort(mainArray, auxiliaryArray, 0, array.length - 1),
    canceled: take(reset.type),
  })

  if (success) {
    yield afterSuccessSorting()
  }
}

function* mergeSort(mainArray, auxiliaryArray, startIdx, endIdx) {
  if (startIdx === endIdx) return

  const middleIdx = Math.floor((startIdx + endIdx) / 2)

  yield mergeSort(auxiliaryArray, mainArray, startIdx, middleIdx)
  yield mergeSort(auxiliaryArray, mainArray, middleIdx + 1, endIdx)

  yield sort(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx)

  return true
}

function* sort(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx) {
  let k = startIdx

  let i = startIdx

  let j = middleIdx + 1

  while (i <= middleIdx && j <= endIdx) {
    yield put(setActiveElements([i, j]))
    yield setPause(SPEED_MULTIPLIER)

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      yield setNewParams({ [k]: auxiliaryArray[i] })
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      yield setNewParams({ [k]: auxiliaryArray[j] })
      mainArray[k++] = auxiliaryArray[j++]
    }
  }

  while (i <= middleIdx) {
    yield put(setActiveElements([i]))
    yield setPause(SPEED_MULTIPLIER)
    yield setNewParams({ [k]: auxiliaryArray[i] })
    mainArray[k++] = auxiliaryArray[i++]
  }

  while (j <= endIdx) {
    yield put(setActiveElements([j]))
    yield setPause(SPEED_MULTIPLIER)
    yield setNewParams({ [k]: auxiliaryArray[j] })
    mainArray[k++] = auxiliaryArray[j++]
  }
}

export default [takeLatest('SORTING/MERGE_SORT', mergeSortHelper)]
