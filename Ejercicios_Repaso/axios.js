

const getNameAxion = async (idPost) => { //También es asicronica
    
try{
    const URL = "https://jsonplaceholder.typicode.com/";
    let respuestaPosteo = await axios(`${URL}posts/${idPost}`)
    //console.log(respuestaPosteo)
    
    let resUser = await axios(`${URL}user/${respuestaPosteo.data.userId}`) // data porque ahí esta el json en AXIOS

    document.write(`${resUser.data.name} es el nombre, ${resUser.data.address} es la dirección`);
} catch(error){
    console.log(error)
}
}
getNameAxion(18)