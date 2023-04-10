let btn = document.getElementById('submitBtn');

btn.addEventListener('click',(e)=>{

    e.preventDefault();
    let student = document.getElementById('studentName').value;

    
    let list =document.createElement('li');

    let text=document.createTextNode(student);

    list.appendChild(text);

   let ul = document.getElementById('ul');

   ul.appendChild(list);


})