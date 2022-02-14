// Enter Supabase Information
const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    await client.auth.signIn({ email, password });
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {
    if (getUser()) location.replace('/other-page'); 
}

export async function logOut() {
    await client.auth.signOut();
    
    return location.replace('/');
}
