## isFetching / isLoading 차이

isFetching은 비동기 쿼리가 아직 해결되지 않았음을 의미한다.
isLoading은 쿼리 함수가 아직 해결되지 않았음을 의미한다. 캐시된 데이터도 없다. 표시할 캐시 데이터도 없다는 것.
페이지네이션을 구현할 때 캐시된 데이터가 있느냐, 없느냐를 구분하게 된다.

isFetching axync 쿼리 함수가 해결되지 않음(데이터 가져오는 중). 캐시된 데이터 존재 여부와 상관 없음.
isLoading isFetching 트루&& 쿼리에 대해 캐시된 데이터가 없는 상태
ex. prefetching 으로 다음 데이터를 미리 캐싱해 두어도 isFetching으로 상태를 구분하면 isLoading과 다르게 작동한다.

### isError

리액트 쿼리는 기본 3번 시도한 후에 에러를 판정한다.

### error

에러 상태가 아닌, 에러를 처리할 때 사용할 수 있다.

## Stale Data

데이터 리페칭은 만료된 데이터에서만 실행된다. 데이터 만료 말고도 컴포넌트가 마운트되거나 윈도우가 다시 포커스되었을 때 리페칭이 실행된다. 하지만, 필수적으로 데이터가 만료되어야한다. stleTime은 데이터의 만료 시간을 결정한다.
staleTime은 useQuery의 세번째 인수로 전달하여 조정할 수 있다.

stale은 리페칭 고려 사항. 캐시는 나중에 필요할 수도 있는데이터 내용.

## Mutaion

서버에 데이터를 업데이트하도록 서버에 네트워크 호출함.