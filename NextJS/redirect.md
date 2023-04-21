# Redirect 와 Rewrite

config 파일에서 redirect, rewrite 해줄 수 있다.
Redirect 와 Rewrite로 경로 리다이렉트, API key 관리 가능.

```
// next.config.js

// 생략
async redirects() {
    return [
        {
            source: "/old-blog/:path*,
            destination: "/new-blog/:path*",
            permanent: flase,
        },
    ];
},
// 생략
```

## API key 숨기기

```
// next.config.js

// 생략
const APIKEY = process.env.API_KEY;
async rewrites() {
    return [
        {
            source: "/api/movies",
            destination: `https://api.movie.org/movielist/${APIKEY}`
        },
    ];
},
// 생략
```
