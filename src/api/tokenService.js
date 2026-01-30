const ACCESS_KEY = 'orientlamp_access_token';
const REFRESH_KEY = 'orientlamp_refresh_token';

const tokenService = {
  setAccessToken: (token) => {
    if (token) localStorage.setItem(ACCESS_KEY, token);
  },
  getAccessToken: () => localStorage.getItem(ACCESS_KEY),
  setRefreshToken: (token) => {
    if (token) localStorage.setItem(REFRESH_KEY, token);
  },
  getRefreshToken: () => localStorage.getItem(REFRESH_KEY),
  clear: () => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  },
};

export default tokenService;
