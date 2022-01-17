// 1. 함수 선언
// function doSomething() {  // (함수에 어떤 값을 전달 받아 올건지, 전달받는 인자를 정의하는 부분)
//     console.log('hello'); // {실제로 함수 안에서 어떤 코드가 동작하는지, 코드를 작성하는 부분}
// }

function add(a, b) {
    const sum = a + b; // sum이라는 변수에 a와 b를 저장함 > a와 b 값을 더한다음 sum이라는 변수에 할당함
    return sum; // 아무런 값도 전달되지 않음. return을 이용해 sum을 전달하면 됨
}
// 2. 함수 호출
// doSomething();

// const result = add(1,2); // 함수가 전달한 값을 변수에 저장할 수 있음
// result라는 변수를 정의함과 동시에(const result), 어떠한 값을 할당할 것인데(=), 그 값은 함수를 먼저 호출해보자(add()),
// 1과 2라는 값을 전달해서 add라는 함수를 호출함, 함수에 정의된 {코드블록}이 실행됨
// console.log(result);

// 3. 함수를 인자로 전달
function doSomething(add) {
    console.log(add); // add라는 함수가 들어옴
    const result = add(2, 3);
    console.log(result);
}

doSomething(add);
// * 많이하는 실수: doSomething(add()); > 함수를 바로 호출해버림 > 함수가 수행이 되고, 그 값이 전달됨
// 호출하고 나서 부르는 것이 아닌, 함수의 이름만 전달하는 것!(=함수 자체를 가리키게 됨)

// practice
const addFun = add;
console.log(addFun);
addFun(1, 2);
