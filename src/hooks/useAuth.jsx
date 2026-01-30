import { createContext, useContext, useState, useEffect } from "react";
import authService from "../api/authService";

// Mock user account (kept as a local fallback for testing)
const MOCK_ACCOUNT = {
  email: "test@gmail.com",
  password: "test1234",
  firstName: "Test",
  lastName: "User",
  educationLevel: "bac+5",
  profilePicture: null,
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        const current = await authService.getCurrentUser();
        if (mounted && current) {
          setUser(current);
          localStorage.setItem("user", JSON.stringify(current));
        }
      } catch (err) {
        console.warn("Failed to load current user", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      // After login, fetch current user
      const current = await authService.getCurrentUser();
      if (current) {
        setUser(current);
        localStorage.setItem("user", JSON.stringify(current));
      }
      return { success: true, data };
    } catch (err) {
      // If backend login fails, allow signing in with the local mock account
      if (email === MOCK_ACCOUNT.email && password === MOCK_ACCOUNT.password) {
        const userData = {
          email: MOCK_ACCOUNT.email,
          firstName: MOCK_ACCOUNT.firstName,
          lastName: MOCK_ACCOUNT.lastName,
          educationLevel: MOCK_ACCOUNT.educationLevel,
          profilePicture: MOCK_ACCOUNT.profilePicture,
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true, data: { mock: true, user: userData } };
      }
      const message =
        err?.response?.data?.message || err.message || "Login failed";
      return { success: false, error: message };
    }
  };

  const register = async (
    firstName,
    lastName,
    email,
    password,
    educationLevel,
  ) => {
    try {
      const data = await authService.register(
        email,
        password,
        firstName,
        lastName,
        educationLevel,
      );
      // Do NOT fetch or store the user after registration. User must verify email first.
      return { success: true, data };
    } catch (err) {
      // Try to extract a useful message from the backend shape. Backend may
      // return either a string or an object like { message: '...' } or
      // { error: '...' }. Fall back to the generic error message.
      let message = "Registration failed";
      let details = null;
      if (err?.response?.data) {
        details = err.response.data;
        const d = err.response.data;
        if (typeof d === "string") message = d;
        else if (d.message) message = d.message;
        else if (d.error) message = d.error;
        else message = JSON.stringify(d);
      } else if (err?.message) {
        message = err.message;
      }
      return { success: false, error: message, details };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    authService.logout();
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
