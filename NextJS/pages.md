# Pages

pages 폴더 안에 파일을 저장하면 파일명을 url로 경로가 설정된다. component명은 상관 없으나, 꼭 `export default` 해야함.
index 파일은 `/` route 경로.

## 페이지 만들기

CRA는 react-router-dom으로 분기를 나누지만 Next.js에서는 pages 폴더에 폴더, 파일을 만들어 나눈다.

```
/movies
pages > movies > index.js

/movies/all
pages > movies > all.js
```

## Path parameter를 사용한 동적 라우팅

주소에 포함되는 변수명과 일치하는 파일을 만들어 사용한다.

```
/movies/:id
movies > [id].js
```

useRouter로 query를 찍어보면 변수로 지정한 파일명(위 예시의 경우 id)라는 이름의 property가 찍힌다.

[useRouter](https://nextjs.org/docs/api-reference/next/router)

## 404 page

자동으로 생성됨

## import React

react method를 사용할 때에는 impot가 필요하지만, 사용하지 않는다면 react 자체를 import 하지 않아도 된다. 그래도 jsx 문법을 사용할 수 있다.

## Pre rending

react와 다르게 컴포넌트의 코드(element)들은 HTML 코드에 포함되어 유저가 요청 시 초기상태로 HTML이 바로 렌더링 된다.

```
useState로 counter 상태를 만들었다. 초기값은 0이고 버튼을 누를 때 마다 1씩 증가 한다.
초기에 렌더링 되는 HTML 파일에는 초기값으로 설정했던 '0'상태로 저장되어있다. 증가한 후에도 코드틑 0이지만 브라우저에서는 증가한 상태를 보여준다.
```

초기 코드는 HTML로, 이후는 react에서 넘겨 받아서 브라우저에 보여준다고 생각하면 간단하다.

## Hydration

**Server side에서 만든 정적 페이지(HTML)와 chunk 단위의 js를 클라이언트에 보내준 후, 클라이언트에서 HTML 코드와 JS코드를 매칭시키는 과정**

- 장점: 로딩이 빠름
- 단점:

HTML을 미리 렌더링하고, 그 뒤에 번들링된 JS로 작동.
react.js를 프론트엔드 안에서 실행함.

**🌟 Next.js**

- 백엔드에서 react.js 코드를 실행하여 html 코드에 포함시켜 브라우저에 미리 렌더링함.
- 브라우저에서는 JS와 react.js가 로딩되지 않은 상태에서 HTML 코드를 통해 미리 콘텐츠를 볼 수 있음
- react.js가 로딩 되고, 미리 렌더링된 HTML 코드와 연결되어 react.js 앱이 된다
