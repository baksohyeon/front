import Layout from "../components/layout";

export default function page() {
  return (
    <Layout>
      <h1>API</h1>
      <p>This page show responses from the api endpoints.</p>
      <p>
        <em>you must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/examples/jwt" />
    </Layout>
  );
}
