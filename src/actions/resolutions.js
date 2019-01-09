import * as actionTypes from './actionTypes';
import axios from '../axios_resoscale'

export const addResolution = (resID) => {
  return {
    type: actionTypes.ADD_RESOLUTION,
    resolutionID: resID,

  }
}

export const removeResolution = (resID) => {
  return {
    type: actionTypes.REMOVE_RESOLUTION,
    resolutionID: resID,
  }
}