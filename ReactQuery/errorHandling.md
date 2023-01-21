# Error Handling

useQuery로 쿼리를 사용할 때마다 따로 에러 처리를 할 수 있다. 하지만 리액트 쿼리 훅 queryClient을 사용하면 useQuery를 사용할 때마다 에러처리가 적용되기 때문데, queryClient에 한 번 정의해두는 것이 간편하다.

```
function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : 'error connecting to server';

  toast.closeAll(); // 토스트 중복 방지
  toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
  },
});
```

정의된 queryClient는 QueryProvider의 props로 내려준다.
