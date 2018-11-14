export default function reducer(
    state={
        loading: false,
        error: null
    }, action) {
    switch (action.type) {
        case 'GET_RESOURCE_SUCCESS':
            return {...state, loading: false, resource: action.data}
        case 'GET_RESOURCES_SUCESS':
            return {...state, loading: false, resources: action.data}
        default:
            return state
  }
}