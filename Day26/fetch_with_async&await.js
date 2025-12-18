let url = "https://catfact.ninja/fact";
async function getFact(){                                //async Function
    try{
        let res = await fetch(url);                      //await 
        let data = await res.json();
        console.log("data -", data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1-", data1.fact);
    }catch(e){
        console.log("ERROR - ",e);
    }
    console.log("Bye");
}
getFact();