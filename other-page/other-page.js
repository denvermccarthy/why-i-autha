// use checkAuth function to redirect is user not authenticated

import { checkAuth, logOut } from '../fetch-utils.js';

// add event listener to the logout button and call logout
const logOutBtn = document.getElementById('logout');
checkAuth();
logOutBtn.addEventListener('click', async () => {
    // console.log('clicked');
    await logOut();
});