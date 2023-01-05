import { useRouter } from "next/router";
import { useEffect } from "react";

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to the Google OAuth2 authorization URL
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      "client_id=447695756565-98a7l5k5dl5ut32k0afo4n6f02ji7js8.apps.googleusercontent.com" +
      "&redirect_uri=http://localhost:3001/api/auth/google/redirect" +
      "&response_type=code" +
      "&scope=email%20profile";
  }, []);

  return <p>Redirecting to Google...</p>;
}

export default LoginPage;
