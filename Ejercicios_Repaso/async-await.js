


const getNameAsync = async (idPost) =>{ // ASYNC - FUNCIÓN ASINCRONICA
    try{
        const URL = "https://jsonplaceholder.typicode.com/";
        //Obtener los datos del post mediante FETCH
        let rePost = await fetch(`${URL}posts/${idPost}`);
        let posteo = await rePost.json() //Lo convierto a JSON
        //document.write(`el posteo se titula ${posteo.title}`);

        let respuestaUser = await fetch(`${URL}user/${posteo.userId}`);
        let user = await respuestaUser.json();
        document.write(`el post${idPost} con el titulo ${posteo.title} lo escribio ${user.name}`);


    } catch(error){

    }
}

getNameAsync(18);