import { API, Auth } from "aws-amplify";
import { getDummyProjects, createDummyProject, getDummyProject} from '../data'


export function createProject(organisationID, project) {
    console.log(project)
    return async dispatch => {
        API.post("cep-api-prod", "/projects", {
            body: {
                organisationID: organisationID,
                project: project
            }
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getProject(projectID) {
    return async dispatch => {
        dispatch({type: "GETTING_PROJECT"})
        API.get("cep-api-prod", "/projects/" + projectID).then(response => {
            dispatch({
                type: "GET_PROJECT_SUCCESS",
                data: response
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getProjects(organisationID) {
    return async dispatch => {
        dispatch({type: "GETTING_PROJECTS"})
        API.get("cep-api-prod", "/projects?organisation_id="+organisationID).then(response => {
            dispatch({
                type: "GET_PROJECTS_SUCCESS",
                data: response
            })
        }).catch(error => {
            console.log(error)
        })
    }
}

export function editProject(project) {
    return async dispatch => {
        API.put("cep-api-prod", "/projects/"+project.id, {
            body: project
        }).catch(error => {
            console.log(error)
        })
    }
}

