// pages/protect.tsx
import Layout from "../components/layout";

const ProtectedPage: React.FC = () => {
  return (
    <Layout>
      <h1>Google Oauth front</h1>
      <p>구글 로그인을 구현한 프론트 사이트 창입니다.</p>
      <p>This is a protected page!</p>
    </Layout>
  );
};

export default ProtectedPage;
