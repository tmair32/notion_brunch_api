import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { method, url } = config;
  console.log(`[Request] ${method?.toUpperCase()} ${url}`);
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  console.log(`[Response] ${method?.toUpperCase()} ${url}`);
  return response;
};

const onError = (error: AxiosError): Promise<AxiosError> => {
  const { method, url } = error.config as AxiosRequestConfig;
  const { status, statusText } = error.response as AxiosResponse;

  switch (status) {
    case 400:
  }

  return Promise.reject(error);
};

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponse, onError);
  return instance;
};
