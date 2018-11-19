export default function reducer(
    state={
        loading: false,
        error: null
    }, action) {
    switch (action.type) {
        case 'GET_BUILDING_BLOCK_SUCCESS':
            return {...state, loading: false, buildingBlock: action.data}
        case 'GET_BUILDING_BLOCKS_SUCCESS':
            return {...state, loading: false, buildingBlocks: action.data}
        default:
            return state
  }
}