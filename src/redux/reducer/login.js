export default function reducer(
  state = {
    loginData: ''
  },
  action
) {
  switch (action.type) {
    case 'LOGIN_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        loginData: action.payload
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        changingStatus: 'failed',
        loginData: action.payload
      };
    }
    case 'LOGIN_RESET': {
      return {
        ...state,
        changingStatus: 'reset',
        loginData: ''
      };
    }
    default: {
      return state;
    }
  }
}
