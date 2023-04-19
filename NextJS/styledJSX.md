next.js 고유의 방법
style 태그를 사용함
클래스네임 지정하지 않아도 됨. 간편.
해당 컴포넌트 내부 스타일에 한정. 부모요소의 css 상속되지 않음

```
<style jsx>{`
   nav {
     background-color: tomato;
   }
   a{
      text-decoration: none;
   }
   .active{

   }
 `}</style>
```

# \_app.js

App.js 혹은 \_app.js파일.가장 먼저 렌더링 되는 파일. \_app.js는 Bluprint
</br>
리액트에서 App.js 같은 역할. 공통 컴포넌트, 글로벌 스타일을 경제적으로 사용할 수 있다.
next.js 페이지나 컴포넌트 내에 css를 임포트하려면 module 형식이어야한다. globals.css 파일은 사용하지 못한다.App.js 혹은 \_app.js파일에서는 globals.css 임포트 가능하다.
