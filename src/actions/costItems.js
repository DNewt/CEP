import { API } from "aws-amplify";
import {getDummyCostItems, addDummyCostItem} from '../data'

export function createCostItem(item) {
    return async dispatch => {
        addDummyCostItem(item)
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

export function getCostItems(organisationID) {
    return async dispatch => {
        getDummyCostItems().then(costItems => {
            dispatch({
                type: "GET_COST_ITEMS_SUCCESS",
                data: costItems
            })
        })
    }
}