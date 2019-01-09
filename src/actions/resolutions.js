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
        const fetchedResolutions = [];
        for (let resKey in response.data) {
          // console.log(resKey)
          fetchedResolutions.push({
            ...response.data[resKey],
            id: resKey
          })
        }
        console.log(fetchedResolutions)
        dispatch(fetchResolutionSuccess(fetchedResolutions))
      })
      .catch(error => {
        dispatch(fetchResolutionFailed(error))
      })
  }
}

// export const addResolution = (resID) => {
//   return {
//     type: actionTypes.ADD_RESOLUTION,
//     resolutionID: resID,

//   }
// }

// export const removeResolution = (resID) => {
//   return {
//     type: actionTypes.REMOVE_RESOLUTION,
//     resolutionID: resID,
//   }
// }