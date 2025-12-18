async function greet(){                       //async function
    throw "404 page not found"
    return "hello";
}
greet().then(()=>{                           // Error Catch
    console.log("promises are resolved")
})
.catch(()=>{
    console.log("promises are rejected")
})

function getNum(){
    return new Promise((resolve , reject)=>{         //get random number
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){                               //function calling
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}