# fallback

fallback 이란, '대비책' 이라는 의미이다.
기능이 제대로 동작하지 않을 때 대처하도록 대비해 놓는 기능. api 호출 시 발생하는 예외처리를 위해 사용할 수 있다.

api 호출 시 함수가 리졸브 되기 전까지는 리턴 값이 나오지 않아 오류가 발생하는 경우가 잦다.

`오류가 발생한 코드`

```
export function useTreatments(): Treatment[] {
  const { data } = useQuery(queryKeys.treatments, getTreatments);
  return data;
}
```

```
Uncaught TypeError: Cannot read properties of undefined (reading 'map')
```

아주 익숙한 오류. map을 실행 할 변수 data 가 아직 정의되지 않은 상태에서 map이 실행된 것이다.

데이터가 아직 정의되지 않은 경우 fallback 을 만들어 에러를 발생시키지 않을 수 있다.

`수정 후 코드`

```
export function useTreatments(): Treatment[] {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments);
  return data;
}
```

data가 잠시 비어있다가(빈배열) 뒤늦게 들어온다. 아주 잠깐이지만 데이터가 비어있는 경우가 사용자 경험을 저해한다면 미리 데이터를 정의해두는 방법도 있다.
