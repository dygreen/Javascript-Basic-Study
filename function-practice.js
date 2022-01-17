function doAnything(add2) {
    console.log(add2);
    const result = add2(2,3);
    console.log(result);
}

doAnything(add2);

function add2(a, b) {
    const sum2 = a + b;
    return sum2;
}

const result = add2(1,2);
console.log(result);
