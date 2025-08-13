import { OAuthProvider } from 'appwrite';
import { account } from './appwrite';

// Email and password Registration
export async function register(email:string,password:string,name:string) {
    return await account.create("unique()", email, password, name);
}

// Email login
export async function login(email: string, password: string) {
  try {
    // Step 1: End any active session (ignore error if none exists)
    await account.deleteSession("current").catch(() => {});

    // Step 2: Create a new session
    return await account.createEmailPasswordSession(email, password);
  } catch (err) {
    throw err;
  }
}

// Google login
export async function loginWithGoogle() {
  const baseUrl = window.location.origin;
  return await account.createOAuth2Session(OAuthProvider.Google, `${baseUrl}/webapp`, `${baseUrl}/account/login`);
}

// Get logged-in user
export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

// Logout
export async function logout() {
  await account.deleteSession("current");
}