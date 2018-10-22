// TODO: convert all the alerts to dispatches
import { Auth } from "aws-amplify";

export function login(user, pass) {
    return async dispatch => {
        try {
            await Auth.signIn(user, pass);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
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
