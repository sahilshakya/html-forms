let object ={
    firstName: "asdsad",
    age:11,
    isStudying : true
}

console.log(object);


let array =[ {name: "ram"},
true,
14,14
];
console.log(array);

console.log(array.length);
console.log(array.length-1);


// function declaration

function sumOfTwo(a,b){
    let sum= a+b;
    let sub =a-b;
    let ojbs ={add : sum, minus:sub}
    return ojbs;
}

let results = sumOfTwo(10,20);
let results1 = sumOfTwo(1,20);
let results2 = sumOfTwo(10,2);
console.log(results);
console.log(results1);
console.log(results2);


function remainder(a,b,c){

    c=a%b;
    let rem ={quiotient:a,divisior:b,remainder:c
    

    }
    return rem;
}

console.log(remainder(105,10));

function conCat(First,Second,Third){

    let added =First+Second+Third;
    return added;

}

let result1 = conCat('hello','world','concat');
console.log(result1);

function upperCase(upper){
    let capital =upper.toUpperCase(upper);
    return capital;
}

console.log(upperCase(result1));

