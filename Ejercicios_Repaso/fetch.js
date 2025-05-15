//Funcion que recibe un ID de post y hace peticiones fetch encadenadas




//FUNCION FLECHA    
const getNameFech = (nombre) =>{
    console.log(nombre);
}

getNameFech("Agistina");

//FUNCION FLECHA    
const getNameFechDos = nombre => console.log(nombre); //Sin () ni {}
getNameFechDos("Agistina");



const getNameFetch = idPost =>{
    //Primera peticion: obtener un post especifico desde la API
    //FETCH cuando le pasas un URL nos trae toda la informacion
    //Porque solo quiero que tariga el ID de un posteo especifico
    const URL = "https://jsonplaceholder.typicode.com/";

    fetch(`${URL}post/${idPost}`)
    .then ((respuesta) =>{              //con el then agarro al respuesta
    return respuesta.json();           //La convierto en formato JSON
    })
    
    //Guardo el json en un post
    .then((post) =>{
        //Hago otro fetch para agarrar de oro usrl 
        fetch (`${URL}users/${post.userId}`)
        .then((respuesta)=>{
            return respuesta.json();    //convierte la respuesta del post a formato JSON
        })
        .then((user)=>{
            //Mostrar en consola informacion de la persona que escribio el post
            document.write(`${user.name}vive en ${user.address.street} escribio el post con el titulo ${post.title}`);
        })
    })
}


getNameFech(8);