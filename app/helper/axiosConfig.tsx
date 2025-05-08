import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios';

// Create axios instance
export const api = axios.create({
  baseURL: 'http://192.168.29.55:8000',
});

// Request interceptor
api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        message: (error.response.data as any)?.message || 'Unknown error',
      });
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Options interface
interface Options {
  url: string;
  method: 'POST' | 'PUT' | 'GET' | 'PATCH' | 'DELETE';
  body?: object;
  params?: any;
  headers?: Record<string, string>;
}

// Generate Axios config
const requestConfig = (options: Options): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    url: options.url,
    method: options.method,
    headers: options.headers || { 'Content-Type': 'application/json' },
    data: options.body,
    params: options.params,
  };

  return config;
};

// Request function
export const request = async (options: Options): Promise<any> => {
  if (!navigator.onLine) {
    return Promise.reject({
      status: false,
      message: 'Internet Disconnected',
    });
  }

  const config = requestConfig(options);
  return api.request(config);
};
