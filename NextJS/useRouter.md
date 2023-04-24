# useRouter

[useRouter](https://nextjs.org/docs/api-reference/next/router)

useRouter로 페이지 이동, uri로 데이터를 넘겨줄 수 있다.
페이지 이동 시 uri에 객체를 포함시킬 수 있다.
</br>
페이지 이동 시 이전 페이지에서 가지고 있는 데이터를 다음 페이지에서도 사용할 시, 다시 요청하거나 state를 사용하는 대신 useRouter.push 시 query에 객체를 넘겨 줄 수 있음

```
//pages > index.js

function Home({ results }) {
    const router = useRouter();
    const onClick = (id) => {
        router.push({
            pathname: `/movies/${id}`,
            query: {
                title: "potato",
            },
        });
    };
return (
    /// 생략
)
};
```

### uri 마스킹

push 사용할 때 브라우저에 노출될 uri를 지정할 수 있다. 아래의 경우에 브라우저에는 `/movies/${id}` 경로로 보여지지만 router의 query를 조회하면 함께 넘겨준 데이터를 사용할 수 있다.

```
//pages > index.js

function Home({ results }) {
    const router = useRouter();
    const onClick = (id) => {
        router.push({
            pathname: `/movies/${id}`,
            query: {
                title: "potato",
            },
        }
        `/movies/${id}`);
    };
return (
    /// 생략
)
};
```

href를 사용할 때는 as 속성을 함께 쓰면 된다.

[출처](https://nomadcoders.co/nextjs-fundamentals/lectures/3451)
