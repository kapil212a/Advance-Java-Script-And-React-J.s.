function saveToDb(data){
    return new Promise((resolve , reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Data will Saved");
        }else{
            reject("Week Connection. Data will not Saved");
        }
    });
}

saveToDb("Aman").then((result)=>{
        console.log("Data1 Will Saved");
        console.log(result);
        return saveToDb("Kapil Kumar Gupta");
    })
    .then((result)=>{
        console.log("Data2 will Saved");
        console.log(result);
        return saveToDb ("Rohit Kumar Yadav");
    })
    .then((result)=>{
        console.log("Data3 will Saved");
        console.log(result);
    })
    .catch((error)=>{
    console.log("Nework Error. Data Will Not Saved");
    console.log(error);
    });