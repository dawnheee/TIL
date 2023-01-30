## prefetchAuery

### queryClient의 메서드 -> `클라이언트 캐시에 추가`

일회성
queryClient의 메소드이므로 queryClient를 반환 해야하며, 이를 위해 useQueryClient 훅을 사용한다.

프리페칭 과정

```
1. 홈페이지 로드
2. queryClient.prefetchQuery 호출 (-> 필요한 데이터 미리 캐시에 추가)
3. 데이터가 필요한 페이지로 이동

( 캐시 시간이 초가되지 않은 경우 )
4. 데이터 로드 후 useQuery 새로운 데이터 가져옴(컴포넌트 이동으로 리페칭 트리거)

( 캐시 시간이 초과된 경우 )
5. 새로운 데이터를 가져올 때까지 빈데이터
```


## prefetching 사용하기
루트 페이지에서 미리 다른 페이지의 데이터를 페칭해둠
- hook 만들기(useTreatments)
```
export function usePrefetchTreatment(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.treatments, getTreatments);
}
```

- 메인페이지에서 사용(Home)
```
export function Home(): ReactElement {
  usePrefetchTreatment();
  return (
    <Stack textAlign="center" justify="center" height="84vh">
      <BackgroundImage />
      <Text textAlign="center" fontFamily="Forum, sans-serif" fontSize="6em">
        <Icon m={4} verticalAlign="top" as={GiFlowerPot} />
        Lazy Days Spa
      </Text>
      <Text>Hours: limited</Text>
      <Text>Address: nearby</Text>
    </Stack>
  );
}
```
