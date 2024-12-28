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
    try {
      window.localStorage.setItem("userData", userData);
      console.log("UserData successfully stored:", userData);
    } catch (error) {
      console.error("Error setting user data:", error);
    }
  }
};

export const getUserData = () => {
  if (typeof window !== "undefined") {
    try {
      const data = window.localStorage.getItem("userData");
      console.log("Retrieved userData:", data);
      return data;
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return null;
    }
  }
  return null;
};

export const deleteUserData = () => {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem("userData");
      console.log("UserData successfully deleted");
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  }
};
