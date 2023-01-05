import Cookies from "js-cookie";
import React from "react";

export default function PageNotFound() {
  const [token, setToken] = React.useState<string>("");

  React.useEffect(() => {
    if (!Cookies.get("access_token")) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    } else {
      return setToken(Cookies.get("access_token"));
    }
  }, [token]);

  return (
    <div>
      <h2>404</h2>
      {token ? (
        <div>인증된 사용자 메뉴</div>
      ) : (
        <div>인증되지 않은 사용자 메뉴</div>
      )}
    </div>
  );
}
