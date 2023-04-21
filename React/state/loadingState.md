loading state를 따로 만들지 않고 undefined인 경우 화면을 다르게 렌더링 해줘도 된다.

movies가 undefined인 경우, movies가 존재하는 경우

```
// 생략
{!movies && <div>Loading...</div>}
{movies?.map((movie) => (
    <div key={movie.id}>
     <h4>{movie.original}</h4>
    </div>
))}
// 생략
```
