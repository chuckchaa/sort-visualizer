import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import arraySettings from './arraySettings/slice'
import sortProcess from './sortProcess/slice'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { arraySettings, sortProcess },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
