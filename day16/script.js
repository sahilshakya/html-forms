document.title="day 16";4

let header =document.getElementById("header");
// header.className="bg-success";
header.style.backgroundColor="lightgrey";


let students = document.getElementsByClassName("students");
console.log(students);


for(let i=0;i<students.length;i++){

students[i].style.backgroundColor="blue";


}


// for(let a of students){
//     console.log(a);
// a.style.backgroundColor="blue";

// }

let headingTwo= document.getElementsByTagName('h2');


for(let a of headingTwo){
    a.style.backgroundColor="green";


}
// map used for array
// students.map((value,index)=>{


// });


// let  firstTag= document.querySelector('h1');
// console.log(firstTag);



function getInputValue(){
const value=document.querySelector("#input-value").value;
console.log(value);


}

function getInputValueAgain(e){
    
    console.log(e);
    
    
    }

    // create element in html

const newDiv = document.createElement('div');
newDiv.className="box bg-danger";
newDiv.id="box1";
// newDiv.textContent="hello";
// newDiv.innerHTML="<h1>this is new line</h1>";
// newDiv.innerText="yoo";

const data = document.createTextNode('this is 3rd line');
newDiv.appendChild(data);


document.body.append(newDiv);





