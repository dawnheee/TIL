# TS에서 callback 함수, void

콜백 함수의 타입을 void로 지정했다.
하지만 호출 시 return라고 있음.
콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있다.

```
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
 });
```

https://www.udemy.com/share/105tjT3@0im59J8dpDpzZLRthu0OwR4JzkkgJWayybsu2AZfxb_4Nbkm0HAwQvKT9a3-s9K87w==/
