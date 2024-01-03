import { select, put, race, take, takeLatest } from 'redux-saga/effects'

import {
  startSorting,
  setNewParams,
  setPause,
  afterSuccessSorting,
  SPEED_MULTIPLIER,
} from './sorting'
import {
  reset,
  setActiveElements,
  setAuxiliaryElements,
} from '../../sortProcess/slice'


function* quickSortHelper() {
  const { array, arrayLength } = yield select(({ arraySettings }) => ({
    array: arraySettings.array,
    arrayLength: arraySettings.arrayLength,
  }))

  yield startSorting()

  const { success } = yield race({
    success: quickSort(array, 0, arrayLength - 1),
    canceled: take(reset.type),
  })

  if (success) {
    yield afterSuccessSorting()
  }
}

function* swap(items, firstIndex, secondIndex) {
  const params = {
    [firstIndex]: items[secondIndex],
    [secondIndex]: items[firstIndex],
  }

  let temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp

  yield setNewParams(params)
  yield setPause(SPEED_MULTIPLIER)
}

function* partition(items, left, right, pivot) {
  let i = left
  let j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      yield put(setActiveElements([i, j]))

      yield setPause(SPEED_MULTIPLIER)
      yield swap(items, i, j)
      yield setPause(SPEED_MULTIPLIER)

      i++
      j--
    }
  }

  return i
}

function* quickSort(items, left, right) {
  const pivotIndex = Math.floor((right + left) / 2)
  const itemsCopy = [...items]
  const pivot = itemsCopy[pivotIndex]

  yield put(setAuxiliaryElements([pivotIndex]))

  const index = yield partition(itemsCopy, left, right, pivot)

  if (left < index - 1) {
    yield quickSort(itemsCopy, left, index - 1)
  }

  if (index < right) {
    yield quickSort(itemsCopy, index, right)
  }

  return itemsCopy
}

export default [takeLatest('SORTING/QUICK_SORT', quickSortHelper)]
