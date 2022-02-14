import { redirectIfLoggedIn, signUpUser } from "./fetch-utils.js";

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    await signUpUser(formData.get('email'), formData.get('password'));
    redirectIfLoggedIn();
});
// Redirect to /other-page on successful auth

// Redirect to /other-page when page loads if user is authenticated
