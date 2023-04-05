// let num1 =document.getElementById('num1').value;
// let num2 =document.getElementById('num2').value;

// function sum(a, b){
//     return total = a+b;

// }
// console.log(sum(num1,num2));

// const cal = document.querySelector('p');

// function change(text){
//     cal.innerHTML=text;

// }

// change('this is sahil');

//arrow function

// const hello=(n1,n2)=>{
//     return {n1,n2};
// }

// console.log(hello(1,2));


//anonymous function

// (()=>{
//     console.log("hello")
// })();


//conditional statement;

// let num = 8;
//  if(num%2 ===0){
//     console.log(`even number ${num}`);


//  }

//  else{
//     console.log(`odd number ${num}`);
//  }

//for loop
 const vritStudents=['ram','shyam','mahesh','david','','muna',''];

//  for(let i=0;i<=vritStudents.length - 1;i++){
//     console.log(vritStudents[i]);
//  }


//  for(let i=0;i<=vritStudents.length-1;i++){
//     if (vritStudents[i]=== 'ram' || 
//     vritStudents[i]=== 'shyam'||
//     vritStudents[i]=== 'mahesh'||
    
//     vritStudents[i]=== 'david'){
//         console.log(vritStudents[i],"studies in the batch");
//     }

//     else{
//         console.log(`${vritStudents[i]} doesn't study in this batch`)
//     }
//  }

 //map


 actualData =[];

 vritStudents.map((value,index)=>{
    console.log(index);
    console.log(value);

    if(a !==''){
        actualData.push(value);
    }

    
 });

 console.log(actualData);


