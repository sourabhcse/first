const posts=[
    {title:'post one', body:'this is post one',craetedat:Date.now()},
    {title:'post two', body:'this is post two',craetedat:Date.now()}
];

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} ${post.body} ${post.craetedat}</li>`;
        });
        document.body.innerHTML=output;
        
    }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=true;
            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        }, 2000);
    });

    
}
createPost({title:'post three', body:'this is post three'}).then(getPosts);



