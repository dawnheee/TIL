# SSR

next.js는 초기 상태를 html 코드를 가져와서 렌더링하고 이후 js 파일로 동작한다.
완전히 서버에서 렌더링을 마치고 이후에 가져오게 할 수 있다.

## Prerendering

prerendering에는 Static Generation, ServerSide Rendering 두 가지 방법이 있다.

## Prefetching

서버 사이드에서 데이터를 prefetching. 클라이언트에게 전송 전에 데이터를 준비하여 html 코드에 포함시켜 전송.
모든 데이터가 준비된 후에 렌더링되기 때문에 **초기 로딩은 시간이 걸리지만, 이후에는 로딩 시간이 단축되며 HTML코드에 데이터가 포함되기 때문에 SEO에 좋다.**
이러한 prefetch 기능은 메인페이지 진입 후 다음으로 진입할 가능성이 높은 페이지의 데이터를 미리 페칭하여 로딩 속도를 줄이는 경우, 무한스크롤, 페이지네이션 등에 쓸 수 있겠다.

## getServerSideProps

일정한 주기를 설정할 수 있는 getStaticProps와 달리, 모든 입력 요청에 대해 실행된다는 차이점이 있다. request, response 객체를 사용할 수 있다.

getServerSideProps 함수 안의 코드는 서버에서 실행된다. 함수 명을 지켜야하며, object를 return 한다. 서버사이드에서 렌더링할 페이지에 함수를 만들어 사용.
예를 들어, 이 함수 안에서 api 키를 사용하면 클라이언트에서는 볼 수 없음. 백엔드에서 실행하고 넘겨주기 때문에. </br>
비동기 요청도 이 함수 안에서 실행하고 그 결과를 return 하는 방법으로 서버로부터 결과만 넘겨받을 수 있다.
return 한 데이터는 사용할 컴포넌트의 props로 받아와 사용한다.
</br>
빌드 프로세스 중 실행되지 않고, 배포 후 상시 서버 상에 존재 한다.</br>

**getServerSideProps는 request 객체에 대한 엑세스가 필요할 때, 데이터를 계속해서 refresh시켜줘야할 때 사용하는 것이 좋다.**

```
 매 요청마다 서버에서 페이지가 새로 사전 렌더링 되니, 시간이 걸린다. 매 순간 데이터가 바뀌거나 request 객체로 인증 엑세스 작업을 하는 게 아니라면 getStaticProps(SSG)가 더 효율적이다.
```

### 예시

```
// index.js (Home 페이지)

//생략
export default function Home({ results }) {
    return (
        <div>
        {results?.map((movie) => (
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        ))}
        </div>
    )
}
export async function getServerSideProps() {
    const { rsult } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
        props: {
            results,
        },
    };
}
```

```
/ _app.js

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

Home 페이지 렌더링 시 서버에서 results를 미리 가져오고, props로 results(...pageProps)를 준다. 서버에서 렌더링되어 오기 때문에 JS 코드 없이 HTML 코드로 데이터를 가져온다.
html에 모든 데이터가 포함되어 있기 때문에 SEO 적합.
