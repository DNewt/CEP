import { API } from "aws-amplify";
import { getDummyProjects, createDummyProject, getDummyProject} from '../data'


export function createProject(organisationID, project) {
    return async dispatch => {
        dispatch({
            type: 'CREATED_PROJECT',
            data: createDummyProject(project)
        })
        // API.post("cep-api-prod", "/projects", {
        //     body: {
        //         organisationID: organisationID,
        //         project: project
        //     }
        // }).catch(error => {
        //     console.log(error)
        // })
    }
}

export function getProject(projectID) {
    return async dispatch => {
        dispatch({type: "GETTING_PROJECT"})

        dispatch({
            type: "GET_PROJECT_SUCCESS",
            data: JSON.parse(JSON.stringify(getDummyProject(projectID)))
        })
        // API.get("cep-api-prod", "/projects/" + projectID).then(response => {
        //     dispatch({
        //         type: "GET_PROJECT_SUCCESS",
        //         data: response
        //     })
        // }).catch(error => {
        //     console.log(error)
        // })
    }
}

export function getProjects(organisationID) {
    return async dispatch => {
        dispatch({type: "GETTING_PROJECTS"})
        dispatch({
            type: "GET_PROJECTS_SUCCESS",
            data: getDummyProjects()
        })
        // API.get("cep-api-prod", "/projects?organisation_id="+organisationID).then(response => {
        //     dispatch({
        //         type: "GET_PROJECTS_SUCCESS",
        //         data: response
        //     })
        // }).catch(error => {
        //     console.log(error)
        // })
    }
}

export function editProject(project) {
    return async dispatch => {
        API.put("cep-api-prod", "/projects/"+project.project_id, {
            body: project
        }).catch(error => {
            console.log(error)
        })
    }
}

