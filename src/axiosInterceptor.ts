// src/axiosInterceptor.ts
import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");
    // If the token exists, add it to the authorization header
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error); // làm thế nào để gọi được cái phjuowng thức này đấy, cái interceptor nó có sẵn trong axios rồi mk chọc vào là dc thôi
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
