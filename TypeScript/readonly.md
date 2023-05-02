# readonly

변수나 속성에 읽기 전용 특성을 부여할 수 있다. 값을 변경할 수 없도록 강제한다. 해당 변수나 속성에 값을 할당할 수 없고 읽기 만 가능하다.

## 데이터의 불변성을 보장하는 기능

readonly는 불변성을 보장하여 코드 안정성을 높이는 데 유용하다. 예를 들어, 프로그램에서 변하지 않는 상수 값을 나타내거나 객체의 중요한 속성을 보호하는 데 사용될 수 있다.

```
interface Person {
  readonly name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30,
};

person.age = 31; // 가능
person.name = "Mike"; // error - 'name' 속성은 읽기 전용

```

person.name에 값을 할당하려고 하면 TypeScript 컴파일러가 오류를 발생시키고 컴파일이 실패한다.
