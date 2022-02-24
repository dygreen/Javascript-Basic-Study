"use strict";

// Q1. array에서 '철수'라는 자료 찾기 (검색 알고리즘)
let nameList = ["흥민", "영희", "철수", "재석"];

function findName(name) {
  // 만약 함수 안에 이름을 집어넣으면 이름이 있으면 콘솔창에 있어요 출력하고,
  // 없으면 아무 글자도 뜨면 안된다
  for (let i = 0; i < 4; i++) {
    if (name == nameList[i]) {
      console.log("있어요");
      return;
    }
  }
}

findName("철수");
findName("명수");

// Q2. 구구단 결과만 콘솔창에 출력하기

// 2단 먼저 반복문으로 구현해보기
// console.log(2 * 1);
// console.log(2 * 2);
// console.log(2 * 3);
// console.log(2 * 4);
// // 2단
// for (let i = 1; i < 10; i++) {
//   console.log(2 * i);
// }
// // 3단
// for (let i = 1; i < 10; i++) {
//   console.log(3 * i);
// }

// 코드 줄이기 : 방법 1
function math(num) {
  for (let i = 1; i < 10; i++) {
    console.log(num * i);
  }
}

math(3);

// 코드 줄이기 : 방법 2
for (let z = 2; z < 10; z++) {
  for (let i = 1; i < 10; i++) {
    console.log(z * i);
  }
}

// Q3. Q. 하반기 실적을 채우기 위해 영업직원을 갈궈야합니다.
// (1) 7~11월 실적과 (2) 평균 월 목표 판매량을 입력하면 개인의 12월 목표 실적을 계산해주는 프로그램(함수)을 만들기로 합니다. 어떻게 만들면 될까요?
// (여기서의 평균은 7~12월 6개월간의 평균으로 합시다)
// 조건 :
// 함수의 첫 파라미터 자리엔 7~11월의 (5개월 간의) 판매실적어레이 (뭐 대충 [12, 5, 3, 6, 25] 이런 array)
// 둘째 파라미터 자리엔 이 직원이 목표로하고 있는 평균 월별 판매량이 들어가야합니다. (대충 30 이런거)
// 그리고 연산 결과(마지막 12월에 채워야할 목표실적)를 콘솔창에 출력해주어야합니다.

// (판매실적어레이 안에 있는 값들+12월에 팔아야할 갯수)/6 = 평균월별판매량

// salesValue는 안에 있는 값을 더한것이다
// salesValue[0]+salesValue[2]..

function calc(salesValue, average) {
  // 5개월치를 더하는 방식을 정의하고
  // 12월에 팔아야할 갯수를 구하는 방식을 정의하고
  // 콘솔에 윗 값을 포함한 문자열 출력하기
  let fiveMonthSale = 0;
  for (let i = 0; i < 5; i++) {
    fiveMonthSale = fiveMonthSale + salesValue[i];
  }

  let novemSales = average * 6 - fiveMonthSale;
  console.log(`12월에는 ${novemSales}개를 팔아야합니다`);
}

calc([10, 20, 30, 40, 50], 35);
calc([11, 6, 2, 3, 5], 10);
