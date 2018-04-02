import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
import { authenticate } from "../services/authApi";
import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validation";

export const signIn = async (email, password) => {
  const error = validateCredentials(email, password);
  if (error) return error;
  const res = await authenticate(email, password);
  if (!res.token) return res;
  setCookie('x-access-token', res.token);
  redirect("/");
  return null;
};

export const signUp = async (name, email, password, password_confirmation) => {
  const error = validateNewUser(name, email, password, password_confirmation);
  if (error) {
    return error;
  }

  const res = await createUser(name, email, password, password_confirmation);

  if (!res.data) {
    return res;
  }

  setCookie("success", `${name}, your account was created.`);
  redirect("/auth/login");
  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie('x-access-token');
    redirect("/auth/login", ctx);
  }
};

export const getJwt = ctx => {
  return getCookie('x-access-token', ctx.req);
};

export const removeJwt = ctx => {
  return removeCookie('x-access-token', ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
  return isAuthenticated(ctx)
};

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect("/auth/login", ctx);
    return true;
  }
  return false;
};

