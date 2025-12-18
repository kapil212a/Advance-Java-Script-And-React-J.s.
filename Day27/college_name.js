const url = "http://universities.hipolabs.com/search?name=";

async function getCollege(country){
    let res = await axios.get(url , country);
    console.log(res);
}
const country = nepal;