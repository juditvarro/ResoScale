import * as actionTypes from './actionTypes';
import axios from '../axios_resoscale'

export const setResources = (resources) => {
  return {
    type: actionTypes.SET_RESOURCES,
    resources: resources
  }
}

export const fetchResourcesFailed = (error) => {
  return {
    type: actionTypes.FETCH_RESOURCES_FAILED,
    error: error
  }
}
export const initResources = () => {
  return dispatch => {
    axios.get('/resources.json')
      .then(response => {

        dispatch(setResources(response.data))
      })
      .catch(error => {
        dispatch(fetchResourcesFailed(error))
      })
  }
}