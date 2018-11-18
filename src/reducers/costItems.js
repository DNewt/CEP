export default function reducer(
    state={
        loading: false,
        error: null
    }, action) {
    switch (action.type) {
        case 'GET_COST_ITEM_SUCCESS':
            return {...state, loading: false, costItem: action.data}
        case 'GET_COST_ITEMS_SUCCESS':
            return {...state, loading: false, costItems: action.data}
        default:
            return state
  }
}