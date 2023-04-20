# \_app.js

파일명은 `app.js`이어야한다(프레임워크의 특징). 가장 먼저 렌더링 되는 파일로, Bluprint.
</br>
리액트에서 App.js 같은 역할. NavBar와 같은 공통 컴포넌트, 글로벌 스타일을 커스텀하여 경제적으로 사용할 수 있다.

```
import Navbar from "../components/NavBar";
import "../styles.globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    </>
  );
}
```

</br>
next.js 페이지나 컴포넌트 내에 css를 임포트하려면 module 형식이어야한다. globals.css 파일은 사용하지 못한다. App.js 혹은 \_app.js파일에서는 globals.css 임포트 가능하다.

</br>

## Layout Component

`_app.js`파일에는 google analytics, search engine 등의 더 중요하고 전역적인 처리를 하고, css나 구성을 위한 처리는 Layout Component로 대신할 수 있다.

```
// _app.js

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}
```

```
// Layout.js

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
     <NavBar />
     <div>{children}</div>
    </>
  )
}
```
