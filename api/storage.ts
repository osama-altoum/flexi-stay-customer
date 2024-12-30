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
  // Check if we are in a browser environment
  if (typeof window === "undefined") {
    return null;
  }

  try {
    // Retrieve and parse user data from localStorage
    const data = window.localStorage.getItem("userData");

    // Return null if data is not found
    if (!data) {
      console.warn("No user data found in localStorage.");
      return null;
    }

    // Parse and return the data
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error("Error retrieving or parsing user data:", error);
    return null;
  }
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
