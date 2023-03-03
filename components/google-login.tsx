import React from "react";
import { useRouter } from "next/router";
import { AuthResponse } from "../interface/auth-response.interface";
import { API_URL } from "../http";
import styles from "./header.module.css";

export const GoogleButton: React.FC = React.memo(({}) => {
  const router = useRouter();
  const [codeSent, setCodeSent] = React.useState<AuthResponse>();

  const onClickAuth = () => {
    try {
      // window.open(
      //   `${API_URL}/auth/google/login`,
      //   "Auth", // window.name - 나중에 같은 이름으로 window.open()을 호출하면 브라우저(IE 제외)에서 기존 창을 새 창으로 바꿉니다.
      //   "width=500,height=500,status=yes,toolbar=no,menubar=no,location=no" // window.params
      // );
      window.location.href = `${API_URL}/auth/google/login`;
    } catch (error) {}
  };

  React.useEffect(() => {
    if (codeSent) router.push({ pathname: "/" });
  }, [codeSent, router]);

  console.log("codeSent", codeSent);
  return (
    <div className={styles.signedInStatus}>
      <span className={styles.notSignedInText}></span>
      <button className={styles.buttonPrimary} onClick={onClickAuth}>
        Google
      </button>
    </div>
  );
});
GoogleButton.displayName = "GoogleButton";
