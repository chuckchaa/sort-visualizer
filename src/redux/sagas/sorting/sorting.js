import { delay, put, select } from 'redux-saga/effects'
import { setArray } from '../../arraySettings/slice'
import { reset, setSortedElements, toggleSort } from '../../sortProcess/slice'

export const SPEED_MULTIPLIER = 1000

export function* setNewParams(params) {
  const array = yield select(({ arraySettings }) => arraySettings.array)
  const arrayCopy = [...array]

  for (let index in params) {
    arrayCopy[index] = params[index]
  }

  yield put(setArray(arrayCopy))
}

export function* setPause(multiplier = SPEED_MULTIPLIER) {
  const sortingSpeed = yield select(
    ({ sortProcess }) => sortProcess.sortingSpeed
  )

  yield delay(multiplier / sortingSpeed)
}

export function* startSorting() {
  yield put(reset())
  yield put(toggleSort(true))
}

export function* afterSuccessSorting() {
  const sortedArrayLength = yield select(
    ({ arraySettings }) => arraySettings.arrayLength
  )

  yield put(reset())

  for (let length = 1; length <= sortedArrayLength; length++) {
    yield put(setSortedElements(Array.from(Array(length).keys())))

    yield setPause(1)
  }
}
