import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_VERCEL_URL,
});

const errorResponseHandler = (error: any) => {
  if (error.response) {
    if (typeof error.response.data?.error === 'string') {
      return Promise.reject(error.response.data.error);
    }

    return Promise.reject(new Error('Ocorreu um erro'));
  }
  if (error.request) {
    if (typeof error.request.response?.error === 'string')
      return Promise.reject(error.request.response.error);

    return Promise.reject(new Error('Ocorreu um erro'));
  }
  return Promise.reject(error.message);
};

api.interceptors.response.use((response) => response, errorResponseHandler);

export default api;
