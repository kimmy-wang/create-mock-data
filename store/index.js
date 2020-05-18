import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'

const persistConfig = {
  key: 'create-mock-data',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export function initializeStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    bindMiddleware([thunkMiddleware])
  )
}

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    const loggerMiddleware = require('redux-logger').default
    return composeWithDevTools(applyMiddleware(...middleware, loggerMiddleware))
  }
  return applyMiddleware(...middleware)
}
