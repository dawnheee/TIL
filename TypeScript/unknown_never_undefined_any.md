# unknown, void, never, undefined, any

TS의 타입

## unKnown

변수나 속성의 타입이 런타임에서만 결정될 수 있다는 것을 나타낸다. 변수의 타입을 미리 알지 못할 때 사용한다. 타입 선언에 unknown을 사용하고, 이후 변수를 사용할 때 타입을 확인하고 연산할 수 있다.
</br>
TypeScript에서는 any 타입을 사용하여 모든 종류의 값을 나타낼 수 있지만, unknown 타입은 모든 값을 나타낼 수는 있지만 명시적인 타입 어설션(타입 단언) 없이는 사용할 수 없다. 즉, unknown 타입 변수를 다른 타입으로 할당하거나 사용하기 전에 명시적으로 타입 어설션을 해야 한다.

```
let a: unknowm;
if(typeof a === 'number'){
    let b = a+1
}
if(typeof a === "string") {
    let b = a.toUpperCase();
}
```

</br>

## void

`함수의 반환값`으로, 아무것도 리턴하지 않음을 명시적으로 나타낸다.

```
function printMessage(message: string): void {
  console.log(message);
}
```

printMessage 함수는 문자열을 콘솔에 출력하기만 하고, 값을 반환하지 않으므로 반환 타입으로 void를 사용한다.
</br>

## never

함수가 return하지 않지 않음. 예를 들어 항상 예외가 발생하거나 에러가 발생하는 경우.

### 무한루프

while 루프나 switch 문에서 break나 return 등이 없이 무한히 실행되는 경우도 never 타입이 될 수 있다. 이러한 경우에는 해당 루프나 문이 절대 종료되지 않기 때문에 never 타입으로 지정된다.

```
function throwError(message: string): never {
  throw new Error(message);
}

```

### 하위 타입으로, 모든 타입에 할당 할 수 있다

never 타입은 다른 타입의 하위 타입으로, 모든 타입에 할당할 수 있다. 그러므로 never 타입의 값은 다른 타입의 값에 할당할 수 있지만, 그 역은 성립하지 않는다.
</br>

## undefined

JS의 원시타입 중 하나로, 값을 할당하지 않은 변수 또는 속성에 자동으로 할당되는 값이다. TS에서는 타입으로도, 값으로도 사용된다.

undefined는 null과 유사하지만, 값이 할당되지 않았음을 나타내는 점에서 차이가 있다. null은 변수에 값이 할당되었지만, 값이 없음을 나타내는 반면, undefined는 값이 할당되지 않았음을 나타낸다.

```
// 값
let myVar: string;
console.log(myVar); // undefined

```

```
// 타입
let myVar: string | undefined;
// 변수를 선언할 때 해당 변수에 할당될 값의 타입이 확실하지
// 않은 경우 undefined 타입을 사용할 수 있다.
```

</br>

## any

TS의 타입 체크에서 벗어남
