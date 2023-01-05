import { useRouter } from "next/router";
import axios from "axios";

async function LoginCallbackPage() {
  const router = useRouter();
  const { code } = router.query;

  // Exchange the authorization code for an access token
  const response = await axios.post("http://localhost:3001/api/auth/google", {
    code,
  });

  const { access_token } = response.data;

  // Store the access token in a cookie or local storage
  // (Note: cookies are not available in Server-Side Rendering)
  if (typeof window !== "undefined") {
    document.cookie = `access_token=${access_token}`;
  }

  // Redirect the user to the home page
  router.push("/");
}

export default LoginCallbackPage;
