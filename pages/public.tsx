import Layout from "../components/layout";

export default function page() {
  return (
    <Layout>
      <h1>Public page</h1>
      <p>
        이 페이지는 <strong>&lt;Header/&gt;</strong> 구성 요소에서{" "}
        <strong>useSession()</strong> React Hook을 사용합니다.
      </p>
      <p>
        <strong>useSession()</strong> React Hook은 사용하기 쉽고 페이지를 매우
        빠르게 렌더링할 수 있습니다.
      </p>
      <p>
        이 접근법의 장점은 <strong>_app.js</strong> 에서{" "}
        <strong>Provider</strong>를 사용하여 세션 상태가 페이지간에 공유되므로{" "}
        <strong>useSession()</strong>을 사용하는 페이지 간 탐색이 매우 빠르다는
        것입니다.
      </p>
      <p>
        <strong>useSession()</strong>의 단점은 클라이언트 측 JavaScript가
        필요하다는 것입니다.
      </p>
    </Layout>
  );
}
