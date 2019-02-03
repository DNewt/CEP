import { Auth } from "aws-amplify";

export function login(username, password) {
    return async dispatch => {
        dispatch({ type: 'LOGGING_IN' })
        try {
            var user = await Auth.signIn(username, password);
            if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                dispatch({
                    type: "NEW_PASSWORD_REQUIRED",
                    user: user
                })
                return;
            }

            dispatch({
                type: "LOGIN_SUCCESS",
                user: user
            })
        } catch (e) {
            dispatch({ type: "LOGIN_FAILED" })
        }
    }
}

export function updatePassword(user, newPassword) {
    return async dispatch => {
        Auth.completeNewPassword(
            user,
            newPassword
        ).then(user => {
            dispatch({
                type: "LOGIN_SUCCESS",
                user: user
            })
        }).catch(e => {
            console.log(e)
            dispatch({ type: "LOGIN_FAILED" })
        });
    }
}

export function checkLoggedIn() {
    return async dispatch => {
        dispatch({ type: 'LOGGING_IN' })
        try {
            var user = await Auth.currentSession();
            dispatch({
                type: "USER_LOGGED_IN",
                user: user
            })
        } catch (e) {
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
