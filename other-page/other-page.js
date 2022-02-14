// use checkAuth function to redirect is user not authenticated

import { logOut } from '../fetch-utils.js';

// add event listener to the logout button and call logout
const logOutBtn = document.getElementById('logout');

logOutBtn.addEventListener('click', async () => {
    // console.log('clicked');
    await logOut();
});