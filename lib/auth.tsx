import axios from "axios";
import { getCookie } from "cookies-next";
import { resolveAny } from "dns/promises";
import Cookies from "js-cookie";

// Function to retrieve the 'access_token' value from the cookie

// Function to make a request to the backend API to retrieve the user's profile data
export async function getUserProfile(): Promise<any> {
  // Retrieve the 'access_token' value from the cookie

  const accessToken = getCookie("access_token");
  if (!accessToken) {
    const res = await axios.get(
      "http://localhost:3001/api/auth/google/profile",
      {
        withCredentials: true,
      }
    );
    return { email: "도토리", username: "도토리" };
  }

  // Make a request to the backend API using the 'access_token'
  const res = await axios.get("http://localhost:3001/api/auth/google/profile", {
    withCredentials: true,
  });
  return res.data;
}
