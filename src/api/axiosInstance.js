import axios from 'axios';

// let storeInstance;
//
// export const injectStore = (store) => {
//   storeInstance = store;
// };

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = storeInstance?.getState().auth.token;
    const token = null; // 임시로 토큰을 가져오는 부분을 비워둠

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // 401 Unauthorized 공통 처리 예시
      if (error.response.status === 401) {
        // e.g., redirect to login
      }
      // ... 다른 상태 코드에 대한 공통 처리 추가 가능
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
