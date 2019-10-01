export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response.status === 500) {
    return response.json().then(errorData => {
      const message = (errorData || {}).error
      const error = new TypeError(message || 'Server error')
      throw error
    })
  }
  if (response.status === 401) {
    const error = {
      code: response.status,
      data: 'Unathorized'
    }
    throw error
  }
  return response.json().then(errorData => {
    const error = {
      code: response.status,
      data: errorData
    }
    throw error
  })
}

export const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json()
  }
  return null
}
