import { login, register } from '$lib/api/backend/authApi';
import { postReview } from '$lib/api/backend/bookApi';
import { authResp } from '$lib/utils/stores';	
import type { Book } from 'shared-component/dist/entity/Book';
import type { Review } from 'shared-component/dist/entity/Review';

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

export function submitMyReview(reviewTitle: string, review: string, userId: string, bookToReview: Book, rating: number) {
    if (reviewTitle.length < 1 || review.length < 1) {
        alert('Wrong review!');
    } else {
        let reviewToPost =
            "<h5 class='card-title'>" +
            reviewTitle +
            '</h5>' +
            "<p class='card-text'>" +
            review +
            '</p>';
        postReview(userId.toString(), bookToReview, reviewToPost, rating)
            .then((string) => {})
            .catch((error) => {
                alert(`Error submitting review`);
            });
    }
}
