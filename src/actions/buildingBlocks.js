import { API } from "aws-amplify";
import {getDummyBuildingBlocks, addDummyBuildingBlock} from '../data'

export function createBuildingBlock(item) {
    return async dispatch => {
        addDummyBuildingBlock(item)
        // .then(costItems => {
        //     dispatch({
        //         type: "GET_COST_ITEMS_SUCCESS",
        //         data: costItems
        //     })
        // })
        // API.post("api", "/costItems", {
        //     body: item
        // })
    }
}

export function getBuildingBlocks(organisationID) {
    return async dispatch => {
        getDummyBuildingBlocks().then(costItems => {
            dispatch({
                type: "GET_BUILDING_BLOCKS_SUCCESS",
                data: costItems
            })
        })
    }
}