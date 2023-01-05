import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

export default function Join() {
  const router = useRouter();
  const [token, setToken] = React.useState<string>("");

  React.useEffect(() => {
    if (Cookies.get("access_token")) {
      setToken(Cookies.get("access_token"));
      router.push({ pathname: "/" });
    }
    // if (token) router.push({ pathname: '/' });
  }, [token]);

  if (token) {
    return <PageNotFound />;
  }
  return (
    <MainLayot>
      <LoginForm />
      {/* <FacebookButtonReact /> */} {/* serverless authentication option */}
    </MainLayot>
  );
}
