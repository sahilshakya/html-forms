    //array methods
    let array =[1,2,3,4,5];

    array.push({firstname: 'sahil'}); //put the data at last
    console.log(array);

    array.pop();

    console.log(array);

    let newarray = array.slice(1,3);
    console.log(newarray);

    array.unshift({name: 'sahil'}); //put the data in first index
    console.log(array);

    array.shift(); //remove the first data
    console.log(array);

    let abc = array.join("");
    console.log(abc);


    // string method

    let string ="madam";

    console.log(string.split(""));


    // asychronous programming

    // console.log('first line')


    // setTimeout(()=>{
    // console.log('second line');

    // },5000);

    // console.log('third line');


    // callback

    const posts =[
        {
            title :'post 1',
            descripton:'description 1'
        },
        {
            title :'post 2',
            descripton:'description 2'
        },
        {
            title :'post 3',
            descripton:'description 3'
        },
        {
            title :'post 4',
            descripton:'description 4'
        },
    ]
    const getPosts = ()=>{

    
    posts.map((value) =>{
        const list = document.createElement('li');
        const data = document.createTextNode(value.title);
        list.appendChild(data);
        document.body.append(list);


    });
    };

    const createPosts = (post, callback)=>{
        setTimeout(()=>{
            posts.push(post);
            callback();

        },2000);

    };

    // createPosts({

    //     title:'post 5',
    //     description:'descripion 5'
    // }, getPosts); //no need for bracket getposts() in callback fnction.

    // promoise euta kam sakepaxi arko kam garne same as callback used in data fetching

    const createPostsPromise = (post)=>{
        let error = false;
        return new Promise((resolve,reject)=>{
            if(error){
                reject('backend failed to submit');
            }
            else{
                posts.push(post);
                resolve(post);
            }

        });
    };

    createPostsPromise({title:'post sahil', description:'description 6'}).then(()=>{
        console.log(posts)
        getPosts();
    })
    .catch((wrong)=>{

console.log('error');

    });




