const BASE_URL = `https://swapi.py4e.com/api/`;

export const showAll = async(type)=>{
  try{

    const res = await fetch(BASE_URL + `${type}`)
    const data = await res.json()
    return data
    
  }catch(error){
    console.log(`error in showing data: ${error}`);
  }
}

export const show = async(name)=>{
  try{
    const res = await fetch(BASE_URL + `starships`)
    const data = await res.json()

    const shipByName = data.results.filter((ship)=>ship.name===name)
    return {results: shipByName}
    
  }catch(error){
    console.log(`error in showing data: ${error}`);
  }
}