

let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
    let fact = await getFact();
    //console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";                    //API

async function getFact(){
    try{
        let res = await axios.get(url);                    //API calling
        return res.data.fact;
    }catch(err){
        console.log("fact not found");
    }
}