const btn = document.getElementById('registerBtn');

btn.addEventListener('click',(e)=>{

    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;


    const user = {
        fullname:name,
        PhoneNumber: phone,
        email:email,
        DateOfBirth:dob,
        Password:password
    }

    console.log(user);


})