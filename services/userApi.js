import { post, get } from "../lib/request";

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


export const getCurrentUser = jwt => {
  return getData('/api/me', jwt);
};

const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt);
  } catch (error) {
    return error;
  }
};
