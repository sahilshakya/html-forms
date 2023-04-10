let btn = document.getElementById('btnSubmit');

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    let data =document.getElementById('Data').value;
    Reverse(data);

});

function Reverse(enteredData){

    let notReversed = enteredData;
    let reversedData='';
    let result = document.getElementById('palin');

    for(let i=enteredData.length-1;i>=0;i--){
        reversedData += enteredData[i];

    }

    if(notReversed===reversedData){
        result.innerText = enteredData + 'is a palindrome';
    }

    else{
        result.innerText =`${enteredData} is not a palindrome`;
    }


}