// if 문은 () 안이 true이면 실행되고, false이면 실행되지 않음
// false: 0, -0, '', null, undefined (데이터가 없고 비어있는 것은 false)
// true: -1, 'hello', object * array[](비어있는 array는 object 자체이기 때문에 true)

// if ([]) {
//     console.log('true!');
// } else {
//     console.log('false!');
// }

let num; // num을 선언하고, 값을 할당하지 않으면, undefined이므로 false
if (num) {
    console.log('true!');
} else {
    console.log('false!');
}

let num2 = 9;  // undefined
if (num2) {
    console.log('true!');
}

num2 && console.log(num2); // num2이 true이면(=num2에 데이터가 있다면), num2를 출력
// && 연산자는 앞에가 true여야 뒤에가 실행됨

let obj = {
    name: 'ellie',
};

if (obj) {
    console.log(obj.name);
}  // 1번

obj && console.log(obj.name); // 2번
// 1번과 2번은 동일함 > 2번이 한줄로 표현할 수 있기 때문에 2번 사용하기
