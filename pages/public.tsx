import Layout from "../components/layout";

export default function page() {
  return (
    <Layout>
      <h1>Public page</h1>
      <h2>전체 공개 페이지</h2>
      <br />
      <p>
        이 페이지는 <strong>&lt;Next Js&gt;</strong> 를 사용하여 구현하였습니다.
      </p>

      <p>
        <strong>로그인 유무</strong>와 상관 없이 해당 페이지를 모든 클라이언트가
        접근할 수 있습니다.
      </p>
      <p>
        <strong>React Hook</strong> 은 사용하기 쉽고 페이지를 매우 빠르게
        렌더링할 수 있습니다.
      </p>
    </Layout>
  );
}
