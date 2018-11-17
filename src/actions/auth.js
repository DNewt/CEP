// TODO: convert all the alerts to dispatches
import { Auth } from "aws-amplify";

export function login(username, pass) {
    return async dispatch => {
        try {
            var user = await Auth.signIn(username, pass);
            dispatch({
                type: "LOGIN_SUCCESS",
                user: user
            })
        } catch (e) {
            alert(e);
        }
    }
}

export function checkLogin() {
    return async dispatch => {
        try {
            await Auth.currentSession();
            alert("user has authenticated")
        } catch(e) {
            if (e !== 'No current user') {
              alert(e);
            }
        }
    }
}

export function register(user, pass) {
    return async dispatch => {
        try {
            const newUser = await Auth.signUp({
              username: user,
              password: pass
            });
            alert("User registered")
        } catch (e) {
            alert(e.message);
        }
        
    }
}
