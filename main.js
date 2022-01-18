// 변수 = 데이터를 담고 있음
// 변수를 선언하면, 그 변수만의 공간이 생김
// number, string, boolean, null, undefined (데이터 자체가 변수에 담겨 있어서, 데이터 자체가 복사되어 들어옴)
// 위 를 제외한 모든 것은 다 'object' 
let number = 2;
let number2 = '2';

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object = 최소한 1~2 가지의 다양한 데이터를 한 군데에 묶어놓은 것
let obj = {
    name: 'ellie',
    age: 5,
}; // 이 obj에서, name이라는 key에는 ellie라는 value가 들어가 있음, age라는 key에는 숫자 5가 들어있음
// 각각 key마다 메모리가 할당 되어짐
// 각 key를 가리키는 것을 묶은 주소(ref)만 obj라는 변수에 할당됨
// (obj는 obj를 가리키고 있는 주소가 들어있기 떄문에, 그 주소만 복사되어 들어옴)

console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('---------');
console.log(obj.name);
console.log(obj2.name); // 가리키고 있는 것이 동일함

obj2.name = 'doyeon';
console.log(obj.name);
console.log(obj2.name);

// const로 선언하면 obj 내부의 값은 변경 불가 (ref가 잠겨있음)
const obj4 = {
    name: 'ellie',
    age: 5,
};

// obj = {
//     name: 'james',
//     age: 7,
// };

// obj가 가리키고 있는 안에 있는 내용은 변경 가능
obj4.name = 'james';


const obj3 = 2;
console.log(obj3);

obj3 = 4;
console.log(obj3);