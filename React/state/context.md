# context

리액트에서 컴포넌트가 데이터를 다루는 방법 중 하나이다. context 이외에는 props, state가 있다.
props와 state만으로 상태 관리를 하면 리액트의 단방향 원칙으로 인해 props drilling 등의 단점이 있다. 이를 해결하기 위해 React는 Flux라는 개념을 도입했고, Context API를 제공한다.

```
props를 사용하지 않고 컴포넌트 간에 값을 전달하는 방법
```

## Context

전역 데이터를 다룰 때 사용한다. 전역으로 사용할 데이터를 context에 저장하고, 필요한 컴포넌트에서 상태를 사용할 수 있다. 이를 위해 Context API를 사용한다.

```
하지만! context를 사용하면 컴포넌트를 재사용하기 어려워질 수 있기 때문에 꼭 필요할 때만 사용하는 것이 좋다. 리액트 공식문서에서는 props drilling을 피하는 것이 주된 목적이라면, Component Composition(컴포넌트 합성)을 먼저 고려할 것을 권한다.
```

### useContext 사용방법

1. 컨텍스트를 만든다(createContext).
2. 컨텍스트를 사용할 전역에서 Provider로 감싼다.(value로 전달할 데이터를 넣어준다.)
3. 사용할 컴포넌트에서는 useContext로 만들어둔 context에 접근할 수 있다.

ThemeContext.js

```
import  {createContext } from 'react';

export const ThemeContext = createContext(null);

```

App.js

```
import { useState } from 'react';
import { TemeContext } from ...;
import Page from ...;

function App() {
    const [ isDark, setIsDark ] = useState(false);

    return(
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <Content />
        <Footer />
        <ThemeContext.Provider>
    )
}
```

Header.js

```
impoert { useContext } from 'react';
import { ThemeContext } from ...;

const Header = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <header
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black',
        }}>
    )
}

export default Header;
```

Footer.js

```
import { useContext } from 'react';
import { ThemeContext } from ...;

const Footer = () => {
   const { isDark, setIsDark } = useContext(ThemeContext);

   const toggleTheme = () => setIsDark(!isDark);

   return(
    <footer
    style = {{
        backgroundColor: isDark ? 'black' : 'lightgray'.
    }}
    >
    <button onClick={toggleTheme}>
    Dark Mode
    </button>
    </footer>
   );
};
export defualt Footer;
```

출처: https://www.youtube.com/watch?v=LwvXVEHS638

https://reactjs.org/docs/context.html

https://dev-yakuza.posstree.com/ko/react/context-api/

https://velog.io/@velopert/react-context-tutorial
