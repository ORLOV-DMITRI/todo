import axios, {AxiosRequestConfig} from "axios";

export const baseUrl = import.meta.env.BASE_URL;


export function getJWTHeader(userToken: string): Record<string, string> {
    return {Authorization: `Bearer ${userToken}`};
}

const config: AxiosRequestConfig = {baseURL: baseUrl};
export const axiosInstance = axios.create(config);


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage?.getItem('token'); // Или получите токен из другого источника
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});