import axios from "axios";
import Cookies from "js-cookie";
import { isDataView } from "util/types";
import Layout from "../components/layout";
import { getUserProfile } from "../lib/auth";

export async function getServerSideProps({ req }: any) {
  const res = await axios.get("http://localhost:3001/api/auth/google/profile", {
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  const data = await res.data;
  return { props: { data } };
}

export default function ProfilePage({ data }: { data: any }) {
  // Render the user's profile data on the page
  return (
    <Layout>
      <h1>Profile</h1>
      <p>Name: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Date of joining : {data.createdAt}</p>
    </Layout>
  );
}
