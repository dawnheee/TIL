# React Query Hook

### useIsFetching

현재 fetching 중인 쿼리의 개수를 리턴하는 훅. 리턴 값이 0 이상인 경우 loading indicator를 띄우는 기능을 만들 수 있다.

```
function Loading(): ReactElement {

  const isFetching = useIsFetching();
  const display = isFetching ? 'inherit' : 'none';

  return (
    <Spinner
      display={display}
    >
    </Spinner>
  );
}
```

### useQuery

반환값

- isError
- isLoading
- isSuccess
- data
- isFetching
