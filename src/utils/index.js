export function isValidSignup(data) {
  if (data.firstName === "" || data.email === "" || data.password === "" || data.confirmPassword === "") {
    return {
      status: false,
      message: "Complete all required fields"
    }
  }
  else {
    return { status: true, message: null }
  }
}

export function isValidLogin(data) {
  if (data.email === "" || data.password === "") {
    return {
      status: false,
      message: "Complete all required fields"
    }
  }
  else {
    return { status: true, message: null }
  }
}

export function isValidEmail(email) {
  var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(String(email).toLowerCase());
}

export function isValidPassword(str) {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str)
}

export function isSamePassword(password, confirmPassword) {
  if (confirmPassword !== password) {
    return {
      status: false,
      message: "Both passwords should match!"
    }
  }
  else {
    return { status: true, message: null }
  }
}