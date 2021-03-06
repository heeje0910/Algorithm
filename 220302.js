// https://newbizstart.notion.site/Algorithm-693053b8e3c9416e8df9b574782a77fa

// **001. 선언과 할당**

// **`문제 설명`**

// 'name'이라는 변수를 선언하고, 자신의 이름을 할당하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - const, let, var를 이용하세요.

let name01 = "신희제";
console.log(name01);
//======================================================
// **002 . 재할당**

// **`문제 설명`**

// 주어진 변수 'name'에 "철수"를 재할당하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - const, let, var 중에 재할당을 할 수 없는 것은 무엇일까요.
let name02 = "영희";
name02 = "철수";
console.log(name02);

//=======================================================
// **003. 배열의 선언과 할당**

// **`문제 설명`**

// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 빈 배열도 만들 수 있습니다.
// - 배열에 데이터를 담을 때 무엇으로 데이터를 구분할까요.
let fruits03 = [];
fruits03 = ["사과", "바나나", "파인애플"];
console.log(fruits03, "3번문제");
//==========================================================
// **004. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - length를 이용해서 문제를 풀어야 합니다.
// - push를 이용해서 문제를 풀어야 합니다.
// - 마지막 요소를 꺼낼 때 length를 사용하는 이유는 무엇일까요.

let fruits04 = ["사과", "바나나", "파인애플"];

let newFruits04 = [];
newFruits.push(fruits[fruits.length - 1]);

console.log(newFruits04);
//======================================================
// **005. 배열의 기능**

// **`문제 설명`**

// 학생들의 이름이 담긴 students 배열이 있습니다.

// 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - slice 기능을 이용해서 문제를 풀어야 합니다.
// - 새로운 배열을 선언, 할당해야 합니다.
// - 배열의 인덱스는 0부터 시작합니다.
let students05 = ["철수", "영희", "훈이", "짱구", "유리"];

let newArr = students05.slice(0, 3);
console.log(newArr);
//===========================================================
// **006. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 배열의 index와 변수의 재할당을 사용해서 문제를 풀어주세요.
let fruits06 = ["사과", "바나나"];

fruits06[0] = "맛있는 " + fruits06[0];
fruits06[1] = "맛있는 " + fruits06[1];

console.log(fruits06);

//==================

// **007. 문자열 배열**

// **`문제 설명`**

// 상수 number는 핸드폰 번호가 담긴 문자열입니다.

// 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - slice를 사용해서 문제를 풀어주세요.
const number = "01012345678";

let arr = [];

arr.push(number.slice(0, 3));
arr.push(number.slice(3, 7));
arr.push(number.slice(7, 11));
console.log(arr, "7번문제");

//=============================
// **008. 객체의 선언과 할당**

// **`문제 설명`**

// 주어진 student 객체에

// 'name'이라는 키를 만들고, "철수"를 할당하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 빈 객체도 만들 수 있습니다.
// - 객체와 배열의 차이점을 잘 구분하세요.
let student08 = {};
student08.name = "철수";
console.log(student08);
//----------------------------------------------------------------------
// **009. 객체의 키&값 추가**

// **`문제 설명`**

// student와 school 두 개의 객체가 있습니다.

// student 객체에 school이라는 객체를 할당해야 합니다.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 객체 안에 객체를 만들 수 있습니다.
const student09 = {
  name: "철수",
  age: 8,
};

const school09 = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student09.school09 = school09;

console.log(student09);
//=======================================
// **010. 객체의 키&값 삭제**

// **`문제 설명`**

// 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.

// 그런데 철수와 관련이 없는 drink라는 키가 있네요.

// student에서 { drink: "사이다" }를 삭제해주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 객체에서 키&값을 삭제하는 명령어는 무엇인가요.
let student10 = {
  name: "철수",
  age: 8,
  drink: "사이다",
};

delete student10.drink;
console.log(student10);
