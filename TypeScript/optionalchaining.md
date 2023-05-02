# Optional chaining

옵셔널 체이닝(Optional chaining)은 JavaScript에서 nullish 값을 검사하는 것을 더 쉽게 하기 위해 ES11(ES2020)에서 도입된 문법입니다. TypeScript에서도 지원된다.

**옵셔널 체이닝은 객체의 속성 중에 하나가 null이거나 undefined인 경우, 그 다음 속성에 접근할 때 발생할 수 있는 에러를 방지하기 위해 사용된다.**

## if 문을 사용하여 검사

기존의 방법은 if문을 사용하는 것.

```
const myObj = {
  prop1: {
    prop2: {
      prop3: 'hello'
    }
  }
};
if (myObj.prop1 && myObj.prop1.prop2 && myObj.prop1.prop2.prop3) {
  console.log(myObj.prop1.prop2.prop3);
}
```

하지만 이 방법은 코드가 복잡해지면 매우 불편하다. 이때 옵셔널 체이닝을 사용하면 간단하게 표현할 수 있다.

## 옵셔널 체이닝

```
const myObj = {
  prop1: {
    prop2: {
      prop3: 'hello'
    }
  }
};

console.log(myObj?.prop1?.prop2?.prop3);

```

?.은 옵셔널 체이닝 연산자이다. 객체의 속성 중에 하나라도 null이나 undefined이라면, 그 다음 속성에 접근하지 않고 undefined를 반환한다. 따라서 위 예시에서 myObj.prop1이 undefined이어도 에러를 발생시키지 않고 undefined를 반환한다.

옵셔널 체이닝 연산자는 함수 호출에서도 사용할 수 있다.

```
function myFunction() {
  return {
    prop1: {
      prop2: {
        prop3: 'hello'
      }
    }
  };
}

console.log(myFunction()?.prop1?.prop2?.prop3);
```

위 예시에서 myFunction()이 undefined를 반환하면, .prop1이나 .prop2에 접근하지 않고 바로 undefined를 반환한다.
