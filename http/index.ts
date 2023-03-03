import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { isDevelopment } from "../env";
// import { store } from '../../features/common/store';

export const API_URL = isDevelopment
  ? `http://localhost:3001`
  : process.env.API_URL;

// 1 먼저 CORS에 의한 접근을 확인하기 위해 옵션 요청이 전송되는데, 이 요청은 자바스크립트에 직접 연결되지 않고 브라우저에서 전송됩니다,
// 응답이 성공하면 204를, 실패하면 403을 받습니다.
// 그런 다음 메인 요청이 전송되고 여기에서 클라이언트에서 결과를 처리합니다.
// 400이면 해당 토큰이 데이터베이스에서 발견되지 않아 빈 값이 반환되거나 잘못된 형식의 요청이 반환됩니다(그 이유가 액세스 토큰인 경우),
// 새로 고침으로 보내고, 새로 고침에 동일한 오류가 발생하면 종료합니다.)
// 401 - 주어진 토큰이 오래되었거나 형식은 올바르지만 데이터베이스에 없는 경우,
// - 새로 고침으로 전송하고, 두 번째 오류가 발생하면 계정에서 로그아웃하고 액세스를 삭제합니다.
// 403 인 경우-접근 권한이 없거나 cors가 허용하지 않거나 사용자의 역할이 적합하지 않습니다.
// - 역할 인 경우 액세스 권한이 없음을 인쇄하고 요청을 반복하지 마십시오.
// 404인 경우 - 경로가 잘못되었습니다.
// 404 페이지를 표시하고 사용자를 쫓아내지 말고 토큰을 삭제하지 마세요.
// if 405 -

// 헤더 사용으로 인해 예비 OPTION 요청을 보냅니다...
// more about cors https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
const $api = axios.create({
  validateStatus: function (status) {
    return status == 200 || status == 201;
  },
  withCredentials: true, // чтобы к каждому запросу куки цеплялись автоматически
  baseURL: `${API_URL}/`,
});

// 서버에서 오류 상태 401, 즉 액세스 토큰이 오래되었다는 응답을 받으면
// 수명이 업데이트된 새로운 새로고침 및 액세스 토큰 쌍을 가져와 쿠키에 저장하도록 추가 요청을 보냅니다,
// 그런 다음 원래 요청을 다시 반복하지만 업데이트된 토큰을 사용합니다.
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
        const response = await axios.get(`${API_URL}/auth/refresh`, {
          withCredentials: true,
        });
        Cookies.remove("token-access");
        Cookies.set("token-access", response.data.user.accessToken);
        // 그런데 서버의 응답에 토큰을 받지 못한 것 외에 다른 데이터가 전송되지 않으면 응답 상태가 200이더라도 인터셉터의 클라이언트는 재요청하지 않습니다,
        return $api.request(originalRequest);
      } catch (e) {
        console.log({ e });
        Cookies.remove("token-access");
        console.log("승인되지 않았거나 잘못된 액세스 토큰 형식!");
      }
    }
    throw error;
  }
);

export default $api;
