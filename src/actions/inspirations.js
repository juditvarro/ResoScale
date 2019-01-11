import * as actionTypes from './actionTypes';
import axios from '../axios_resoscale';

export const fetchInspirationsSuccess = (inspirations) => {
  return {
    type: actionTypes.FETCH_INSPIRATIONS_SUCCESS,
    inspirations: inspirations
  }
}

export const fetchInspirationsStart = () => {
  return {
    type: actionTypes.FETCH_INSPIRATIONS_START
  }
}

export const fetchInspirationsFailed = (error) => {
  return {
    type: actionTypes.FETCH_INSPIRATIONS_FAILED,
    error: error,
  }
}

export const fetchInspirations = () => {
  return dispatch => {
    dispatch(fetchInspirationsStart());
    axios.get('/inspirations.json')
      .then(response => {
        const startingObject = {}
        let finishingObject = {}

        for (let insKey in response.data) {
          const fetchedInspirations = Object.assign({}, startingObject, { id: insKey, ...response.data[insKey] })
          finishingObject[insKey] = fetchedInspirations
        }
        dispatch(fetchInspirationsSuccess(finishingObject))
      })
      .catch(error => {
        dispatch(fetchInspirationsFailed(error))
      })
  }
}