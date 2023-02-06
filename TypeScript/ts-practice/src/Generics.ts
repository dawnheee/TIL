// Generics
// 타입스크립트에서 함수, 클래스, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야하는 상황에서 사용하는 문법.
// 어떤 타입이 주어질지 알 수 없는 상황

// interface에서 Generics 사용하기
interface Item<S> {
  list: S[];
}
const items: Item<string> = {
  list: ["s", "o"],
};

// type 에서 Generics 사용하기
type Items<S> = {
  list: S[];
};
const itemss: Items<string> = {
  list: ["a", "d"],
};

// https://react.vlpt.us/using-typescript/01-practice.html
// https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD-type-aliases
