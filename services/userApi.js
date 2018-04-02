import { post, get } from "../lib/request";
import { removeJwt } from 'lib/auth';

export const createUser = async (
  name,
  email,
  password,
  password_confirmation
) => {
  try {
    const response = await post("/users", {
      user: {
        name,
        email,
        password,
        password_confirmation
      }
    });
    return response;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "Email is already taken."
      : "Unknown error. Please try again";
  }
};


export const getCurrentUser = (jwt, ctx={}) => {
  if(!jwt) return new Promise((resolve) => resolve(null))
  return getData('/api/me', jwt)
    .then(result => {
      return result.data.success ? result.data.user : null
    })
    .catch(err => {
      if(jwt && err.response && err.response.status === 401) {
        removeJwt(ctx)
      }
      return null
    });
};

const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt);
  } catch (error) {
    return error;
  }
};
