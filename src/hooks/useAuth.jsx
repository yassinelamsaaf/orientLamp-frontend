import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock user account
const MOCK_ACCOUNT = {
  email: 'test@gmail.com',
  password: 'test1234',
  firstName: 'Test',
  lastName: 'User',
  educationLevel: 'bac+5',
  profilePicture: null
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === MOCK_ACCOUNT.email && password === MOCK_ACCOUNT.password) {
      const userData = {
        email: MOCK_ACCOUNT.email,
        firstName: MOCK_ACCOUNT.firstName,
        lastName: MOCK_ACCOUNT.lastName,
        educationLevel: MOCK_ACCOUNT.educationLevel,
        profilePicture: MOCK_ACCOUNT.profilePicture
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Email ou mot de passe incorrect' };
  };

  const register = (data) => {
    // In a real app, this would call an API
    const userData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      educationLevel: data.educationLevel,
      profilePicture: null
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
