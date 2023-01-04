import { useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function profilePage() {
  const { data } = useSession();

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
