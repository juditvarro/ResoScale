import * as actionTypes from './actionTypes';
import axios from '../axios_resoscale'

export const fetchResolutionSuccess = (resolutions) => {
  return {
    type: actionTypes.FETCH_RESOLUTIONS_SUCCESS,
    resolutions: resolutions
  }
}

export const fetchResolutionStart = () => {
  return {
    type: actionTypes.FETCH_RESOLUTIONS_START
  }
}

export const fetchResolutionFailed = (error) => {
  return {
    type: actionTypes.FETCH_RESOLUTIONS_FAILED,
    error: error,
  }
}

export const fetchResolutions = () => {
  return dispatch => {
    dispatch(fetchResolutionStart());
    axios.get('/resolutions.json')
      .then(response => {
        // console.log(response.data)
        // const fetchedResolutions = [];
        const startingObject = {}
        let finishingObject = {}


        // const fetchedResolutions = {}

        for (let resKey in response.data) {
          const fetchedResolution = Object.assign({}, startingObject, { id: resKey, ...response.data[resKey], resClicked: false, resAdded: false })
          finishingObject[resKey] = fetchedResolution
          // console.log(fetchedResolution)
          // fetchedResolutions.push({
          //   ...response.data[resKey],
          //   id: resKey,
          //   resClicked: false,
          //   resAdded: false,
          // })
        }
        // console.log('OBJFRM', fetchedResolutions)
        // console.log('OBJ', moka)

        dispatch(fetchResolutionSuccess(finishingObject))
      })
      .catch(error => {
        dispatch(fetchResolutionFailed(error))
      })
  }
}

export const addResolution = (resID, budgetObject) => {
  return {
    type: actionTypes.ADD_RESOLUTION,
    resID: resID,
    budgetObject: budgetObject
  }
}

export const removeResolution = (resID, budgetObject) => {
  return {
    type: actionTypes.REMOVE_RESOLUTION,
    resID: resID,
    budgetObject: budgetObject
  }
}