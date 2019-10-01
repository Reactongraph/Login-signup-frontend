import fetch from 'cross-fetch'
import { checkStatus, parseJSON } from '../utils/responseHandler'

const constant = {
  URL: 'http://localhost:1300/v1/api/'
}

// Make an api call
export default async (url, method = 'post', body, autherization) => {
  var headers = {}
  if (autherization) {
    headers = {
      'Content-Type': 'application/json',
      auth_token: localStorage.getItem('token')
    }
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${constant.URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: headers
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error
    })
}
