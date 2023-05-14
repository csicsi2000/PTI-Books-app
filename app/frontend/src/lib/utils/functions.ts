import { login, register } from '$lib/api/backend/authApi';
import { postReview } from '$lib/api/backend/bookApi';
import { authResp } from '$lib/utils/stores';	

export function loginToMyAccount(email: string, password: string ) {
    const loginRequestBody = {
        email:email,
        password: password
    };

    login(loginRequestBody)
        .then((authResponse) => {
            authResp.set(authResponse);
        })
        .catch((error) => {
            alert(`Error logging in: ${loginRequestBody.email}`);
        });
};


export function registerMyAccount(email: string, password: string, firstName: string, lastName: string, age: number) {
    const registerRequestBody = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    register(registerRequestBody)
        .then((authResponse) => {
            authResp.set(authResponse);
            alert(`Logged in with token ${authResponse.token} and user ID ${authResponse.user}.`);
        })
        .catch((error) => {
            alert(`Error logging in: ${error.message}`);
        });
};
