import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AccessDenied from "../components/access-denied";
import Layout from "../components/layout";

export default function page() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  const fetchdata = async () => {
    const res = await fetch("/api/examples/protected");
    const json = await res.json();
    if (json.content) {
      setContent(json.content);
    }
  };
  // Fetch content from protected route
  useEffect(() => {
    fetchdata();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) {
    return null;
  }

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>
        <strong> {content || "\u00a0"} </strong>
      </p>
    </Layout>
  );
}
