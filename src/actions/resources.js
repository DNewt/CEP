import { API } from "aws-amplify";

export function createResource(resource) {
    return async dispatch => {
        API.post("api", "/resources", {
            body: resource
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getResource(resourceID) {
    return async dispatch => {
        API.get("api", "/resources/" + resourceID).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getResources(organisationID) {
    return async dispatch => {
        API.get("api", "/resources?organisation_id="+organisationID).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
}

export function editResource(resource) {
    return async dispatch => {
        API.put("api", "/resources/"+resource.resource_id, {
            body: resource
        }).catch(error => {
            console.log(error)
        })
    }
}

