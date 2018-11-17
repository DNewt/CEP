import { API } from "aws-amplify";


export function createResource(resource) {
    return async dispatch => {
        API.post("cep", "/resources", {
            body: resource
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getResource(resourceID) {
    return async dispatch => {
        API.get("cep", "/resources/" + resourceID).then(response => {
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

    return async dispatch => {
        API.get("cep", "/resources?organisation_id="+organisationID).then(response => {
            dispatch({
                type: "GOT_RESOURCES",
                data: response
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function editResource(resource) {
    return async dispatch => {
        API.put("cep-api", "/resources/"+resource.resource_id, {
            body: resource
        }).catch(error => {
            console.log(error)
        })
    }
}

