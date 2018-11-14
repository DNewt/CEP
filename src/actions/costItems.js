import { API } from "aws-amplify";

export function createCostItem(item) {
    return async dispatch => {
        API.post("api", "/costItems", {
            body: item
        })
    }
}