# SSG 와 SSR

next.js는 서버에서 pre-rendering. 이후 페이지 생성 방법에 따라 SSR, SSG로 나뉨

- 동적으로 페이지 생성: SSR(Setver Side Rendering)
- 정적으로 페이지 생성: SSG(Static Site Generation)
  </br>

## SSG

빌드 시 pages 폴더 기준으로 static한 파일을 만들어둔다.
</br>
해당 페이지를 요청하면 미리 가지고 있던 정적 파일을 반환한다. 때문에 CSR 보다 빠르다. 실시간으로 정보가 변하지 않는, 정적인 정보들을 각 요청에 대해 동일하게 반환해야하는 경우에 주로 사용한다. 예를 들어 블로그 글, 상품 정보 같은 경우.

`개발 모드에서는 SSG로 작성해도 요청마다 페이지가 재생성된다.`

</br>

### getStaticProps

클라이언트가 아닌 서버에서만 실행되는 함수로, 빌드 시 한 번만 호출 된다.
특정 데이터와 SSG를 해야하는 경우에 getStaticProps 함수를 비동기로 정의하여 사용할 수 있음.
