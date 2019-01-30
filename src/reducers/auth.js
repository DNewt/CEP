export default function reducer(
    state={
        loading: false,
        error: null,
        results: []
    }, action) {
    switch (action.type) {
      case 'LOGGING_IN':
        return {...state, loading: true}
      case 'LOGIN_SUCCESS':
        return {...state, user: action.user, loading: false}
      case 'LOGIN_FAILED':
        return {...state, loading: false, user: null, error: action.error}
      case 'USER_LOGGED_IN':
        return {...state, loading: false, user: action.user}
      case 'USER_NOT_FOUND':
        return {...state, loading: false, user: null, error: action.error}
      case 'REGISTERING':
        return {...state, loading: true}
      case 'REGISTRATION_SUCCESS':
        return {...state, loading: false}
      case 'REGISTRATION_FAILURE':
        return {...state, loading: false, error: action.error}
      default:
        return state
  }
}