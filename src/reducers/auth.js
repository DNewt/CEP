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
      case 'LOGIN_FAILURE':
        return {...state, loading: false, error: action.error}
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