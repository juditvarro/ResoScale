import * as actionTypes from '../actions/actionTypes'

const initialState = {
  resources: null,
  error: false,

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESOURCES:
      return {
        ...state,
        resources: action.resources,
        error: false,
      }
    case actionTypes.FETCH_RESOURCES_FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}


export default reducer