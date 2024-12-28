export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token");
  }
  return null;
};

export const deleteToken = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("token");
  }
};

//--------------------------------------

export const setUserData = (userData: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("userData", userData);
  }
};

export const getUserData = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("userData");
  }
  return null;
};

export const deleteUserData = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("userData");
  }
};
