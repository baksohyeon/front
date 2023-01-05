import axios from "axios";
import Cookies from "js-cookie";
import { AuthResponse } from "../interface/auth-response.interface";

export const API_URL = "http://localhost:3001";

const $api = axios.create({
  validateStatus: function (status) {
    return status === 200 || status === 201;
  },
  withCredentials: true, // 모든 요청에 쿠키가 자동으로 연결되도록 함
  baseURL: `${API_URL}/ api/auth/google`,
});

// 서버에 요청할 때마다 쿠키에 저장된 현재 "access"토큰을 꺼내 인증을 위해 서버에 보냅니다.
$api.interceptors.request.use(async (config) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  config.headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}/api/auth/google/refresh`,
          {
            withCredentials: true,
          }
        );
        Cookies.remove("access_token");
        Cookies.set("access_token", response.data.user.accessToken);
        // к слову если не отправить данные внутри ответа от сервера, помимо неполучения токенов, на клиенте в интерцепторе не произойдет повторный запрос,
        // даже если статус ответа 200
        return $api.request(originalRequest);
      } catch (e) {
        console.log({ e });
        Cookies.remove("access_token");
        console.log("승인되지 않았거나 잘못된 토큰 액세스 포맷입니다.");
      }
    }
    throw error;
  }
);

export default $api;
