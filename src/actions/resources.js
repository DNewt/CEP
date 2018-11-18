import { API } from "aws-amplify";
import {getDummyResources, addDummyResource} from '../data'

export function createResource(resource) {
    return async dispatch => {
        addDummyResource(resource)
        // API.post("cep-api-prod", "/resources", {
        //     body: resource
        // }).catch(error => {
        //     console.log(error)
        // })
    }
}

export function getResource(resourceID) {
    return async dispatch => {
        API.get("cep-api-prod", "/resources/" + resourceID).then(response => {
            dispatch({
                type: "GOT_RESOURCE",
                data: response
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getResources(organisationID) {

    return dispatch => {
        getDummyResources().then(resources => {
            dispatch({
                type: "GET_RESOURCES_SUCCESS",
                data: resources
            })
        })
    }
    
    // return async dispatch => {
    //     API.get("cep-api-prod", "/resources?organisation_id="+organisationID).then(response => {
    //         dispatch({
    //             type: "GOT_RESOURCES",
    //             data: response
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }
}

export function editResource(resource) {
    return async dispatch => {
        API.put("cep-api-prod", "/resources/"+resource.resource_id, {
            body: resource
        }).catch(error => {
            console.log(error)
        })
    }
}

