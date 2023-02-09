# TypeScript

## TypeScript의 타입

number, string, boolean,

TS 형식으로 작성한 코드를 JS로 컴파일할 때 타입이 잘못된 부분이 있으면, 컴파일을 중단하지 않고 에러를 알려준다. (하지만 컴파일 오류를 발생시킨다.) 타입스크립트는 런타임 코드를 변경하지 않는다.
`타입스크립트를 사용하면 오류를 미리 감지하고 일부 런타임 오류를 방지할 수 있다`

JS는 동적타입, TS는 정적타입. 개발도중에 매개변수의 타입을 정의한다. 런타임 중에 변경되지 않는다.

타입스크립트는 타입을 추론할 수 있지만 명시적으로 할당해주기도 한다.
변수 선언과 함께 분명한 타입의 값을 할당하지 않는 경우, 선언하면서 타입을 지정해주는 것이 좋다. 선언과 할당을 동시에 한다면 굳이 선언하며 타입을 지정할 필요는 없다.
`타입스크립트의 타입은 컴파일 중에 확인되는 반면, 자바스크립트 타입은 런타임 중에 확인된다. 미리 타입 오류를 확인할 수 있다는 이점이 있다.`

### Object 타입 지정

```
const person: {
    name: string;
    age: number'
} = {
    name: 'sherlock',
    age: 22
};
```

## Array 타입 지정

```
let family: string[];
family = ['JM', 'SH', 'HK', 'SJ', 'SH', 'CB'];
```

```
const sH: any[];
sH = ['student', 45];
```

---

## Tuple

요소의 개수가 정해져 있는 배열. JS에는 없는 타입이다. 미리 정한 길이를 충족시켜야 하지만 push 메서드를 통해 요소를 추가해도 error가 발생하지 않는다. 배열의 길이, 각 요소의 타입을 미리 지정할 수 있는 상황에서는 튜플을 사용하는 것이 좋다.

```
const person = {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
};
```

---

## Enum

숫자와 문자열 기반 열거형. 의도를 문서화하거나 구분되는 사례 집합을 만들 수 있다.
값에 미리 이름을 정의하고 열거해서 사용하는 방식.

### **Enum을 사용하는 이유**

**_카테고리 별로 값을 명확하게, 효율적으로 나누기 위해_**

속성에 할당된 숫자(/문자열) 값을 기억하지 않아도 숫자에 할당된 속성으로 값을 비교, 분류할 수 있다. 리덕스의 액션 타입을 정의할 수도 있다.

### Enum과 JS 객체의 차이

- js 객체는 선언, 할당 후 수정할 수 있지만 enum은 수정이 불가하다.
- enum은 속성 값으로 숫자, 문자열만 할당할 수 있다.

---

## Any

any타입을 사용하면 컴파일러가 타입을 확인하지 않음.

---

## union

한 변수에 두 가지 이상의 타입이 할당될 수 있음.

```
input: number | string
```

```
type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael'; // 컴파일에러가 발생하지 않는다
```

---

## Literal

특정 문자열을 타입으로 지정할 수 있다. 아래의 경우 name에 미리 정한 두 가지 값 이외의 다른 것을 전달하면 오류가 발생한다.

```
function sh(age: number, name: 'seohee' | 'sherlock'){
    console.log(`My name is ${name}. I am ${age}.`)
}
```

https://www.udemy.com/share/105tjT3@HxNf89cScDai2QFWa8bR-hEi7kXaiu5X7yhOxi5ZVjYm1_nvaD-O-F7X1SJlVkFwPg==/
