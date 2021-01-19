// users-service.js
// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api';

export async function signUp(newFormData) {
  try {
    const token = await usersAPI.signUp(newFormData);
    return token;
  } catch {
    throw new Error('Invalid Sign Up')
  }
}