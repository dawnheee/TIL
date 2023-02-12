# Class 와 Interface

## class 약식 초기화

title, pricem isListed 클래스 타입 지정, 선언과 this로 바인딩까지 두번에 걸쳐 이루어지고 있다.

```
class Product {
  title: string;
  price: number;
  private isListed: boolean;

  constructor(name: string, pr: number) {
    this.title = name;
    this.price = pr;
    this.isListed = true;
  }
}

```

constructor의 매개변수에 타입까지 지정해서 전달하여 코드를 줄인다.

```
class Product {
    private isListed: boolean;

    constructor(public title: string, public price: number){
    this.isListed: true;
    }
}
```
