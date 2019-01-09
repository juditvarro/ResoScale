import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://resolutionscale.firebaseio.com/',
})

export default instance