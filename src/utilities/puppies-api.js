
import { getToken } from './users-service';

const BASE_URL = '/api/puppies';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function create(newPupData) {
  return sendRequest(BASE_URL, 'POST', newPupData);
}

export function update(updatePuppy) {
  return sendRequest(`${BASE_URL}/${updatePuppy._id}`, 'PUT', updatePuppy);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}