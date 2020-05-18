import * as actionTypes from './action-types'

const initialState = {
  darkMode: false,
}

// REDUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DARK_MODE_CHANGED:
      return Object.assign({}, state, {
        darkMode: !!action.darkMode,
      })
    default:
      return state
  }
}
