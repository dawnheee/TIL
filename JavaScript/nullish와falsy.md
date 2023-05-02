# falsy 와 nullish

## Falsy

Falsy한 값은 조건문에서 false로 처리되는 값으로, false, 0, ''(빈 문자열), NaN, null, undefined이 있다.

## Nullish

null 또는 undefined 값만을 의미한다.

## falsy와 nullish는 확연히 다르다

```
const myValue = 0;
const myOtherValue = null;

console.log(myValue || 5); // 출력: 5
console.log(myOtherValue || 5); // 출력: 5

```

위 코드에서 ||(논리 OR) 연산자는 첫 번째 피연산자(myValue 또는 myOtherValue)가 falsy한 값일 경우 두 번째 피연산자(5)를 반환한다. myValue는 0이라는 truthy한 값이기 때문에 두 번째 피연산자가 무시되고, myOtherValue는 null이라는 falsy한 값이기 때문에 두 번째 피연산자가 반환된다.

하지만 Nullish 병합 연산자(??)를 사용하면 다음과 같이 작동한다.

```
const myValue = 0;
const myOtherValue = null;

console.log(myValue ?? 5); // 출력: 0
console.log(myOtherValue ?? 5); // 출력: 5
```

Nullish 병합 연산자는 첫 번째 피연산자가 null 또는 undefined일 때만 두 번째 피연산자를 반환한다. myValue는 0이라는 falsy한 값이지만, Nullish 값은 아니기 때문에 첫 번째 피연산자인 myValue가 반환된다. myOtherValue는 null이라는 Nullish 값이기 때문에 두 번째 피연산자인 5가 반환된다.

즉, Nullish 값과 falsy한 값은 비슷하지만 엄격히 다른 개념. **Nullish 값은 null 또는 undefined 값만을 의미하며, falsy한 값은 조건문에서 false로 처리되는 값으로 null 또는 undefined를 포함한 여러 값을 가질 수 있다.**
