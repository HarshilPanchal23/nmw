import axios, { AxiosError, AxiosResponse } from 'axios';

  // Create axios instance
  export const api = axios.create({
    baseURL: 'http://192.168.29.55:8000'
  });

  api.interceptors.request.use(
      (config) => {
        // You can add request logging or modify config here
        console.log('Sending request to:', config.url);
        return config;
      },
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );

  // Response interceptor (simplified)
  api.interceptors.response.use(
      (response) => {
        // Just return the data from the response
        return response.data;
      },
      (error) => {
        // Basic error handling
        if (error.response) {
          // Server responded with error status
          console.error('API Error:', {
            status: error.response.status,
            message: error.response.data?.message || 'Unknown error',
          });
        } else if (error.request) {
          // Request was made but no response received
          console.error('No response received:', error.request);
        } else {
          // Something else went wrong
          console.error('Request setup error:', error.message);
        }
        
        return Promise.reject(error);
      }
    );  

    const requestConfig = (options) => {
      const config = {
          // headers: options.headers || { "Content-Type": "application/json" },
          url: options.url,
          method: options.method,
          ...options,
      };

      if (options.body) config.data = options.body;
      if (options.params) config.params = options.params;
      
      return config;
  };
  export const request = (options) => {
      const config = requestConfig(options);
      if (navigator.onLine) {
          return api.request(config);
      }
      return {
          status: false,
          message: "Internet Disconnected",
      };
  };