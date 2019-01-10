import * as actionTypes from '../actions/actionTypes'

const initialState = {
  resources: null,
  error: false,
  resloading: false,
  resolutions: {}

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
    case actionTypes.FETCH_RESOLUTIONS_START:
      return {
        ...state,
        resloading: true
      }
    case actionTypes.FETCH_RESOLUTIONS_SUCCESS:
      return {
        ...state,
        resolutions: action.resolutions,
        resloading: false
      }
    case actionTypes.FETCH_RESOLUTIONS_FAILED:
      return {
        ...state,
        resloading: false
      }
    case actionTypes.ADD_RESOLUTION:
      const addedResolution = {
        ...action.resData,
        resAdded: true
      }
      console.log(addedResolution)
      return {
        ...state,
        resolutions: {
          ...state.resolutions,
          [action.resID]: {
            ...state.resolutions[action.resID],
            resAdded: true
          }
        },
      }
    default:
      return state
  }
}


export default reducer