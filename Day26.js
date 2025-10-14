async function greet(){
    throw "404 page not found"
    return "hello";
}
greet().then(()=>{
    console.log("promises are resolved")
})
.catch(()=>{
    console.log("promises are rejected")
})

function getNum(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}