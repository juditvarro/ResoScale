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
      // const addedResolution = {
      //   ...action.resData,
      //   resAdded: true
      // }
      console.log(action.budgetObject['brain'])
      return {
        ...state,
        resources: {
          ...state.resources,
          ['brain']: state.resources['brain'] + action.budgetObject['brain'],
          ['energy']: state.resources['energy'] + action.budgetObject['energy'],
          ['freetime']: state.resources['freetime'] + action.budgetObject['freetime'],
          ['health']: state.resources['health'] + action.budgetObject['health'],
          ['money']: state.resources['money'] + action.budgetObject['money'],
          ['socialvalue']: state.resources['socialvalue'] + action.budgetObject['socialvalue'],
          ['willpower']: state.resources['willpower'] + action.budgetObject['willpower']
        },
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