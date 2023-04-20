# Next.js CSS

## module.css

css 파일을 따로 만들어 임포트해서 사용. className 지정해서 사용

## style JSX

next.js 고유의 방법으로, style 태그와 jsx 속성을 사용한다.
클래스네임 지정하지 않아도 된다.
해당 컴포넌트 내부 스타일에 한정되며, 부모요소의 css 상속되지 않는다.

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

</br>
