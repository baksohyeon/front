import axios from "axios";
import Cookies from "js-cookie";
import Layout from "../components/layout";
import { getUserProfile } from "../lib/auth";

export async function getServerSideProps(context) {
  // Call the 'getUserProfile' function to retrieve the user's profile data

  const userProfile = await getUserProfile();
  return {
    props: {
      userProfile,
    },
  };
}

export default function ProfilePage({ userProfile }: { userProfile: any }) {
  // Render the user's profile data on the page
  console.log(userProfile);
  return (
    <Layout>
      <h1>Profile</h1>
      {/* <p>Name: {userProfile.username}</p>
      <p>Email: {userProfile.email}</p> */}
    </Layout>
  );
}
