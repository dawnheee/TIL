# Type Alias

`type alias 적용 하지 않음`

```
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
){
    ...
}
```

`type alias 적용`

```
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
){
    ...
}
```

타입에 이름을 붙여 할당해두고 타입 지정이 필요할 때 사용한다.

---

## 언제 Type Alias를 사용할까?

일반 객체의 경우 type을 사용하자. 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.
interface 수준의 복잡한 타입도 미리 만들어 별칭을 부여해 사용한다.

타입 별칭을 쓰지 않을 때

```
const year: number = 2000;
```

타입 별칭을 사용할 때

```
type Year = number;
const birth: Year = 2000;
```

조금 더 복잡한 타입을 사용할 때

```
type Introduce = {
  name: string;
  age?: number;
  tall: number;
};

const introduceSH: Introduce = {
  name: "sh",
  tall: 181,
  age: 80,
};

type Color = "Yellow" | "Black" | "White";
const color: Color = "Black"; // 'Color' 하나만 지정했으니 하나만 할당
const colors: Color[] = ["Black", "White"]; // 'Yellow'| 'Black'| 'White' 이외의 문자열은 할당할 수 없다.
```

**alias를 사용하면, 불필요하게 같은 코드를 반복하지 않고, 타입을 한 곳에서 관리할 수 있다.**
아래 코드는 user의 타입을 각 함수마다 정의하고 있다.

```
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

type alias를 사용하여 한 번만 타입을 지정해 사용하는 것이 효율적이다.

```
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

## void

값을 반환하지 않는 함수 => void

```
function sum(x: number, y: number): number {
  // return 의 타입도 number 임을 명시함
  return x + y;
}
```

함수에서 아무것도 반환하지 않는다면 'void' 지정

```
function returnNothing(): void {
  console.log("void");
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
```

# interface

클래스와 관련된 타입은 interface를 사용하자
일반 객체 interface로 타입 설정

```
interface Person {
  name: string;
  age?: number;
}
```

미리 만들어둔 interface Person 사용

```
const sh: Person = {
  name: "sh",
  age: 90,
};
```

interface 상속받아 Person skills 추가

```
interface Developer extends Person {
  skills: string[];
}

const kim: Developer = {
  name: "kim",
  skills: ["JS", "react"],
};
// age는 사용하지 않아도 된다
```

https://react.vlpt.us/using-typescript/01-practice.html
https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD-type-aliases
https://www.udemy.com/share/105tjT3@HxNf89cScDai2QFWa8bR-hEi7kXaiu5X7yhOxi5ZVjYm1_nvaD-O-F7X1SJlVkFwPg==/
