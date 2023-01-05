import axios from "axios";
import Cookies from "js-cookie";
import { AuthResponse } from "../interface/auth-response.interface";

export const API_URL = "http://localhost:3001";

const $api = axios.create({
  validateStatus: function (status) {
    return status === 200 || status === 201;
  },
  withCredentials: true, // 모든 요청에 쿠키가 자동으로 연결되도록 함
  baseURL: `${API_URL}/api`,
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
        // 참고로, 응답 상태가 200인 경우에도 토큰을 받지 못하는 것 외에도
        // 서버로부터 응답 내에 데이터를 보내지 않으면 인터셉터에서 클라이언트에 다시 요청이 발생하지 않는다.
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
