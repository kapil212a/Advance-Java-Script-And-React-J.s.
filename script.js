//Call Back Hell----->
function saveToDb(data , succes , failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        succes();
    }else{
        failure();
    }
}

saveToDb(
    "apana college",
    () => {
    console.log("Data1 will saved");
    saveToDb("Aman gupta",
        () =>{
            console.log("Data2 will saved");
            saveToDb("New data",
                ()=>{
                    console.log("Data3 will saved");
                },()=>{
                    console.log("Data4 will not saved");
                }
            )
        },
        ()=>{
            console.log("weak connection Data2 will not saved")
        }
    )
    },() =>{
    console.log("weak internet connection. Data will not saved");
    }
);