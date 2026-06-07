const TOKEN_KEY = "crmToken";
const USER_KEY = "crmUser";

const canUseStorage = () => typeof window !== "undefined";

export const getToken = () =>
  canUseStorage() ? localStorage.getItem(TOKEN_KEY) : null;

export const getUser = () => {
  if (!canUseStorage()) return null;

  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
};

export const saveAuth = (token, user) => {
  if (!canUseStorage()) return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearAuth = () => {
  if (!canUseStorage()) return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const isAuthenticated = () => Boolean(getToken());
