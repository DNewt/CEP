import { Auth } from "aws-amplify";

export function login(username, password) {
    return async dispatch => {
        dispatch({type: 'LOGGING_IN'})
        try {
            var user = {name: "Jake", organisationID: "1"} // await Auth.signIn(username, password);
            dispatch({
                type: "LOGIN_SUCCESS",
                user: user
            })
        } catch (e) {
            dispatch({type: "LOGIN_FAILED"})
            alert(e);
        }
    }
}

export function checkLoggedIn() {
    return async dispatch => {
        dispatch({type: 'LOGGING_IN'})
        try {
            var user = await Auth.currentSession();
            dispatch({
                type: "USER_LOGGED_IN",
                user: user
            })
        } catch(e) {
            dispatch({
                type: "USER_NOT_FOUND",
                error: "No details found for this user"
            })
            if (e !== 'No current user') {
                console.log(e)
            }
        }
    }
}

// probably needs to do some different memery due to creating user through an admin?
export function register(username, password) {
    return async dispatch => {
        try {
            const user = await Auth.signUp({
              username: username,
              password: password
            });
            alert("User registered")
        } catch (e) {
            alert(e.message);
        }
        
    }
}
