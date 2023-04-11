const btn = document.getElementById('loginBtn');

btn.addEventListener('click',(e)=>{

    e.preventDefault();

    
    const email = document.getElementById('email').value;
    
    const password = document.getElementById('password').value;

    loginData ={
        Email:email,
        password:password
    };
    console.log(loginData);


    



})