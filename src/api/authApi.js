import axiosClient from './axiosClient';

const authApi = {
  register: (payload) => axiosClient.post('/api/auth/register', payload),
  login: (payload) => axiosClient.post('/api/auth/login', payload),
  verifyEmail: (token) => axiosClient.get(`/api/auth/verify-email?token=${encodeURIComponent(token)}`),
  refresh: (refreshToken) => axiosClient.post('/api/auth/refresh', { refreshToken }),
  testProtected: (accessToken) => axiosClient.get('/api/auth/test', {
    headers: { Authorization: `Bearer ${accessToken}` },
  }),
  getUserByEmail: (email) => axiosClient.get(`/api/users/email/${encodeURIComponent(email)}`),
};

export default authApi;
