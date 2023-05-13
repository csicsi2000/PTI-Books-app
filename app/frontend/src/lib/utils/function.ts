import { login, register } from '$lib/api/backend/authApi';
import { authResp } from '$lib/utils/stores';	


export function passwordMatch(value : any, form: any) {
	if (value !== form.values.password) {
			return { passwordMatch: true };
	}
}

export function containNumbers(numbers: any) {
	return function(value: any) {
		if (value.replace(/[^0-9]/g,"").length < numbers) {
			return { containNumbers: numbers };
		}
	}
}                     


export function loginToMyAccount(email: string, password: string ) {
    const loginRequestBody = {
        email:email,
        password: password
    };

    login(loginRequestBody)
        .then((authResponse) => {
            authResp.set(authResponse);
            alert(`Logged in with token ${authResponse.token} and user ID ${authResponse.id}.`);
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
            alert(`Logged in with token ${authResponse.token} and user ID ${authResponse.id}.`);
        })
        .catch((error) => {
            alert(`Error logging in: ${error.message}`);
        });
};