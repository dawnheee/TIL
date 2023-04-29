# API Route

pages 폴더 아래에 'api' 폴더로 만든다. 폴더의 파일을 nextJS가 API 라우트로 바꾼다. 이 라우트가 곧 요청의 대상(엔드포인트)가 되며, JSON의 전송을 받고 반환하는 역할을 한다.
</br>
서해당 url에 요청이 전송 되었을 때만 서버사이드에서 실행된다.

## 파일명

`api` 폴더의 파일 이름이 URL 경로 세그먼트가 된다.

## request, response

request와 response를 매개변수로 받는다.

### request 객체

헤더와 요청 본문이 들어간다.

- method를 사용하여 요청의 method를 알 수 있다.
- body를 사용하여 요청 본문을 알 수 있다.

### response 객체
