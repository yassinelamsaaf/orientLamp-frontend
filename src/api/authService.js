import authApi from './authApi';
import tokenService from './tokenService';

const authService = {
  // register expects the fields provided by the signup form
  register: async (email, password, firstName, lastName, currentStudyLevel) => {
    const payload = {
      email,
      password,
      firstName,
      lastName,
      currentStudyLevel,
    };
    const res = await authApi.register(payload);
    // Do not automatically persist tokens on register. Email verification
    // should be required before logging the user in. Return response for UI to handle.
    return res.data;
  },

  // login accepts explicit email and password
  login: async (email, password) => {
    const res = await authApi.login({ email, password });
    if (res?.data?.accessToken) tokenService.setAccessToken(res.data.accessToken);
    if (res?.data?.refreshToken) tokenService.setRefreshToken(res.data.refreshToken);
    return res.data;
  },

  logout: () => {
    tokenService.clear();
  },

  refresh: async () => {
    const refreshToken = tokenService.getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token available');
    const res = await authApi.refresh(refreshToken);
    if (res?.data?.accessToken) tokenService.setAccessToken(res.data.accessToken);
    if (res?.data?.refreshToken) tokenService.setRefreshToken(res.data.refreshToken);
    return res.data;
  },
  // Decode stored JWT to extract email (subject) and fetch user profile from backend
  getCurrentUser: async () => {
    const token = tokenService.getAccessToken();
    if (!token) return null;
    try {
      // JWT format: header.payload.signature
      const parts = token.split('.');
      if (parts.length < 2) return null;
      const payload = parts[1];
      // base64url decode
      const json = decodeURIComponent(
        atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
          .split('')
          .map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      const data = JSON.parse(json);
      const email = data.sub || data.email || data.username;
      if (!email) return null;
      const res = await authApi.getUserByEmail(email);
      return res.data;
    } catch (err) {
      console.warn('Failed to decode token or fetch current user', err);
      return null;
    }
  },
};

export default authService;
