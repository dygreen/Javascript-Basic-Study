// ***** Optional Chaining (ES11)
{
  const person1 = {
    name: "ellie",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "bob",
      },
    },
  };

  const person2 = {
    name: "bob",
  };

  // X
  {
    function printManager(person){
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2); -> error
  }

  // O
  {
    function printManager(person){
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

// ***** Nullish Coalescing Operator (ES11)
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = "ellie";
    const userName = name || "guest";
    console.log(userName);
  }

  // X
  {
    const name = null;
    const userName = name || "guest";
    console.log(userName); /* guest */

    const num = 0;
    const message = num || "undefined";
    console.log(message); /* undefined */
  }

  // O
  {
    const name = '';
    const userName = name ?? "guest";
    /* = name에 값이 있다면 name을 쓰고, name에 값이 없다면 "guest"를 이용하자 */
    console.log(userName); /*  */

    const num = 0;
    const message = num ?? "undefined";
    console.log(message); /* 0 */
  }
}