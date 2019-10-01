export default function reducer(
  state = {
    signupData: ''
  },
  action
) {
  switch (action.type) {
    case 'SIGNUP_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'SIGNUP_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        signupData: action.payload
      };
    }
    case 'SIGNUP_FAILED': {
      return {
        ...state,
        changingStatus: 'failed',
        signupData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
