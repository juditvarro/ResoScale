// import * as actionTypes from '../actions/actionTypes';
import { createReducer } from 'redux-create-reducer';
import { updateObject } from '../utils/utility'

const initialState = {
  resources: null,
  error: false,
  resloading: false,
  resolutions: {},
  insloading: false,
  inspirations: {}

};

const setResources = (state, action) => {
  return updateObject(state, {
    resources: action.resources,
    error: false,
  })
}

const fetchResourcesFailed = (state, action) => updateObject(state, { error: true })
const fetchResolutionStart = (state, action) => updateObject(state, { resloading: true });

const fetchResolutionSuccess = (state, action) => {
  return updateObject(state, {
    resolutions: action.resolutions,
    resloading: false
  })
}
const fetchResolutionFailed = (state, action) => updateObject(state, { resloading: false });
const addResolution = (state, action) => {
  const updatedResourcesAfterAdding = updateObject(state.resources, {
    'brain': state.resources['brain'] + action.budgetObject['brain'],
    'energy': state.resources['energy'] + action.budgetObject['energy'],
    'freetime': state.resources['freetime'] + action.budgetObject['freetime'],
    'health': state.resources['health'] + action.budgetObject['health'],
    'money': state.resources['money'] + action.budgetObject['money'],
    'socialvalue': state.resources['socialvalue'] + action.budgetObject['socialvalue'],
    'willpower': state.resources['willpower'] + action.budgetObject['willpower']
  })

  const updatedAddedResolution = updateObject(state.resolutions[action.resID], { resAdded: true })
  const updatedResolutionsAfterAdding = updateObject(state.resolutions, { [action.resID]: updatedAddedResolution })
  const updatedStateAdd = {
    resources: updatedResourcesAfterAdding,
    resolutions: updatedResolutionsAfterAdding
  }
  return updateObject(state, updatedStateAdd)
}

const removeResolution = (state, action) => {
  const updatedResourcesAferRemoving = updateObject(state.resources, {
    'brain': state.resources['brain'] - action.budgetObject['brain'],
    'energy': state.resources['energy'] - action.budgetObject['energy'],
    'freetime': state.resources['freetime'] - action.budgetObject['freetime'],
    'health': state.resources['health'] - action.budgetObject['health'],
    'money': state.resources['money'] - action.budgetObject['money'],
    'socialvalue': state.resources['socialvalue'] - action.budgetObject['socialvalue'],
    'willpower': state.resources['willpower'] - action.budgetObject['willpower']
  })

  const updatedResolutionRemoved = updateObject(state.resolutions[action.resID], { resAdded: false })
  const updatedResolutionsAfterRemove = updateObject(state.resolutions, { [action.resID]: updatedResolutionRemoved })
  const updatedStateRemoval = {
    resources: updatedResourcesAferRemoving,
    resolutions: updatedResolutionsAfterRemove
  }
  return updateObject(state, updatedStateRemoval)
}

const fetchInspirationStart = (state, action) => updateObject(state, { insloading: true });

const fetchInspirationSuccess = (state, action) => {
  return updateObject(state, {
    inspirations: action.inspirations,
    insloading: false
  })
}

const fetchInspirationFailed = (state, action) => updateObject(state, { insloading: false })


// REDUCER SWITCH
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_RESOURCES: return setResources(state, action)
//     case actionTypes.FETCH_RESOURCES_FAILED: return fetchResourcesFailed(state, action)
//     case actionTypes.FETCH_RESOLUTIONS_START: return fetchResolutionStart(state, action)
//     case actionTypes.FETCH_RESOLUTIONS_SUCCESS: return fetchResolutionSuccess(state, action)
//     case actionTypes.FETCH_RESOLUTIONS_FAILED: return fetchResolutionFailed(state, action)
//     case actionTypes.ADD_RESOLUTION: return addResolution(state, action)
//     case actionTypes.REMOVE_RESOLUTION: return removeResolution(state, action)
//     case actionTypes.FETCH_INSPIRATIONS_START: return fetchInspirationStart(state, action)
//     case actionTypes.FETCH_INSPIRATIONS_SUCCESS: return fetchInspirationSuccess(state, action)
//     case actionTypes.FETCH_INSPIRATIONS_FAILED: return fetchInspirationFailed(state, action)

//     default:
//       return state
//   }
// }

const reducer = createReducer(initialState, {
  SET_RESOURCES: setResources,
  FETCH_RESOURCES_FAILED: fetchResourcesFailed,
  FETCH_RESOLUTIONS_START: fetchResolutionStart,
  FETCH_RESOLUTIONS_SUCCESS: fetchResolutionSuccess,
  FETCH_RESOLUTIONS_FAILED: fetchResolutionFailed,
  ADD_RESOLUTION: addResolution,
  REMOVE_RESOLUTION: removeResolution,
  FETCH_INSPIRATIONS_START: fetchInspirationStart,
  FETCH_INSPIRATIONS_SUCCESS: fetchInspirationSuccess,
  FETCH_INSPIRATIONS_FAILED: fetchInspirationFailed,
})


export default reducer