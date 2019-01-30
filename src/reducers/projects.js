export default function reducer(
    state={
        loading: false,
        error: null
    }, action) {
    switch (action.type) {
        case 'GETTING_PROJECT':
            return {...state, loading: true}
        case 'GET_PROJECT_SUCCESS':
            return {...state, loading: false, project: action.data}
        case 'GET_PROJECTS_SUCCESS':
            return {...state, loading: false, projects: action.data}
        case 'CREATE_PROJECT_SUCCESS':
            return {...state, loading: false, projects: action.data}
        default:
            return state
  }
}