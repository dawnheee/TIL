# Ts로 상태관리

useState의 초기값에 타입을 지정할 수 있다. 아래는 Generics를 사용하여 상태의 타입을 설정한 예제이다.

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

https://react.vlpt.us/using-typescript/03-ts-manage-state.html

하지만 useState 사용 시 Generics을 사용하지 않아도 알아서 타입이 유추되기 때문에 생략해도 된다.

## useState 사용 시, 언제 Generics가 필요할까?

`상태가 null 일 수도 있고, 아닐 수도 있을 때 Generics을 사용한다`

```
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
```

# 인풋 상태 관리

App.js

```
import React from 'react';
import MyForm from './MyForm';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};

export default App;
```

MyForm.js

```
import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```

출처 https://react.vlpt.us/using-typescript/03-ts-manage-state.html
