# TypeScript_Learn

타입 스크립트 공부

# 목차

[설명](#설명)

### 설명

JavaScript는 문제점을 바로바로 체크를 할 수 없다.
이를 해결하기 위해 나온 것이 TypeScript

IDE에서 많은 도움을 얻을 수 있음
사소한 실수를 방지 가능

### 기본 설정

yarn init -y

-  package.json
   yarn add typescript
   yarn add ts-node
   yarn run tsc --init

### 기본 타입 설정

```ts
const message: string = "hello world";
```

yarn run tsc 돌리면 var로 바뀌게 된다
es2016

-  outDir 경로 설정 시 yarn run tsc 경로가 다른곳으로 생기게 된다.
   "outDir": "./dist" /_ Redirect output structure to the directory. _/,

> 그 다음에 node ./dist/practice.js 실행

-  만약 js로 변경 안하고 실행 시키고 싶다면
   yarn run ts-node ./src/practice.ts

*  변수 뒤에 무조건 타입을 설정해줘야 하는 것은 아님
   js와 동일하게 자동으로 적용이 되는 부분

```ts
let count: number = 0;

count += 1;

// 문자
const message: string = "hello world";
// 불리언
const done: Boolean = false;
// 배열
const numbers: number[] = [1, 2, 3];
// 문자열
const messages: string[] = ["heelo", "world"];
// 문자열 일 수도 있고 undefined 일 수도 있을 경우
let mightbeUndefined: string | undefined = undefined;
//숫자 이거나 null 일수도 있는 경우
let numllableNumber: number | null = 5;
// 여러가지 값을 가질 수 있는 경우
let color: "red" | "oragne" | "yello" = "red";
color = "yello";
```

### 함수

typeScript에서는 함수에서 인자로 무조건 타입을 설정해줘야 한다.
안해줄 경우 오류가 생기게 됨

-  함수의 결과의 값도 타입을 정해줄 수 있음
   사전에 정해버려서 생성 되는 오류를 안나게 할 수 있다.

```typescript
function sum(x: number, y: number): number {
   return x + y;
}

const result = sum(2, 3);

console.log(result);
```

-  reducer 같은 배열 함수에도 값을 적용 할 수 있다.

```typescript
function sumArray(numbers: number[]): number {
   return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
```

-  return type의 값에 대한 값도 정해줄 수 있으므로 이것도 명시

### interface

class또는 객체타입을 지정할 때 사용

1. interface로 객체 설정
1. class를 만들어서 implements로 객체를 포함하도록함
1. class 안쪽에 constructor를 설정하여서 함수 안에 변수와 타입을 삽입
1. 객체에 선언된 함수를 사용하고 return값을 정해줌

-  일반적 코드

```typescript
interface Shape {
   // 함수가 존재, 결과물: number
   getArea(): number;
}

class Rectagle implements Shape {
   width: number;
   height: number;

   constructor(width: number, heigth: number) {
      this.width = width;
      this.height = heigth;
   }
   getArea() {
      return this.width * this.height;
   }
}
```

-  this 사용 안하고 자동화 하는 법
   변수를 삭제
   constructure에 변수를 pblic 또는 private로 설정
   ```typescript
   class Circle implements Shape {
      constructor(public radius: number) {}
      getArea() {
         return this.radius * this.radius * Math.PI;
      }
   }
   ```
