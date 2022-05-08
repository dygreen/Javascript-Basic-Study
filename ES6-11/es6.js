
// ***** Shorthand property names *****
{
  const ellie1 = {
    name: "ellie",
    age: "18",
  };

  const name = "ellie";
  const age = "18";

  //  X
  const ellie2 = {
    name: name,
    age: age,
  };

  // O = 똑같은 값은 생략 가능
  const ellie3 = {
    name,
    age,
  };
}

// ***** Destructuring Assignment *****
{
  // object
  const student = {
    name: "anna",
    level: 1,
  };

  // X
  {
    const name = student.name;
    const level = student.level;
  }

  // O = student에 있는 key와 value값이 각각 name과 level에 맞게 할당됨 
  {
    const { name,level } = student;

    // 다른 이름으로 선언하고 싶을 때
    const { name:studentName, level:studentLevel } = student;
  }

  // array
  const animals = [ "dog", "cat" ];

  // X
  {
    const first = animals[0];
    const second = animals[1];
  }

  // O
  {
    const [ first, second ] = animals;
  }
}

// ***** Spread Syntax *****
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [ obj1, obj2 ];

  // array copy
  const arrayCopy = [...array];
  // copy에 새로운 아이템 추가하려면
  const arrayCopy2 = [...array, { key: "key3" }];

  // Spread Syntax는 주소값만 복사해오는 것 -> 원본을 변경하면 다른 복사본에도 변경됨
  obj1.key = "newKey";


  // object copy
  const obj3 = {...obj1};

  // array concatenation
  const fruits1 = ["apple","banana"];
  const fruits2 = ["kiwi", "peach"];
  const fruits = [...fruits1, ...fruits2];

  // object merge (만약 key가 동일한 object를 병합한다면, 제일 뒤에 있는 value가 첫번째를 덮어씌움)
  const dog1 = {dog1:"doggy"};
  const dog2 = {dog2:"doggy2"};
  const dog = {...dog1, ...dog2};
}

// ***** Default parameters *****
{
  {
    function printMessage(message = "default message"){ /* default값 설정 */
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

// ***** Ternary Operator *****
{
  const isCat = true;

  // X
  {
    let component;
    if(isCat){
      component = "cat";
    } else {
      component = "dog";
    }
  }

  // O
  {
    const component = isCat ? "cat" : "dog";
  }
}