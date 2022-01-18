// 함수
function add(num1, num2) {
    return num1 + num2;
}

const sum = add(3,4);
console.log(sum);

const doSomething = add;
const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2);

function print() {  // print()는 아무리 많은 인자를 전달해도 무시함(아무런 인자를 받지 않음)
    console.log('print');
}

// 받아온 데이터에 접근하고 싶다면
function print(name, age) {
    console.log(`${name}, ${age}`);
}

print('doyeon', 26);

//
function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3); // operator라는 인자를 실행해서, result에 할당 // operator(2,3)은 divide(2, 3)과 동일함
    console.log(result);
}

surprise(divide);