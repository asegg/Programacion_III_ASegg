

const listaEventos =  document.getElementById("listaEventos");
const formularios = document.getElementById("formulario");
const nombreEvento = document.getAnimations("nombreEvento");
const fechaInput = document.getElementById("fechaEvento")

let eventos = [] //Guardamos en un array los eventos

//Cargar eventos desde el archivo JSON simulado
const cargarEventos = async () =>{
    const respuesta = await fetch ("eventos.json");
    eventos = await respuesta.json();
    mostrarEventos()//Llamar a la funcion para que muestre los eventos
};

//Mostrar los eventos en el DOM
const mostrarEventos = () =>{
    listaEventos.innerHTML =""; //limpio
    const hoy = new Date(); //Para tyrabajar con el día de hoy
    eventos.forEach((evento)=>{ //Recorro los eventos para mostrarlos
        const li = documento.createElemnt("li");
        li.classlist.add("evento"); // agrego

        //Comparo la fecha del evento con la fecha actual
        const fechaEvento = new Date(evento.fecha)
        const esPasado = fechaEvento < hoy; //Da uyn booleano

        li.classlist.add(esPasado?"pasado":"futuro") //If ternario, si es pasado o futuro
        
        li.innerHTML = 
        `<span>${evento.nombre} - ${evento.fecha}</span>
        <button class ="Eliminar" data-id="${evento.id}">🗑️</button>
        `;
        listaEventos.appendChild(li);
        document.querySelectorAll(".eliminar").forEach(btn=>{
            btn.addEventListener("click",(e) =>{
                const id = parseInt(e.targhet.dataset.id) //Data set es un atributo del DOM, personalizando un atributo en elboton
                eliminarEvento(id); //La funcion de elminar evento que hay que amrar
            })
        });

    });
}

const agregarEvento = (e) =>{
    e.preventDeFault();

    const nombre = nombreInput.value.trim();
    const fecha = fechaInput.value;

    if(!nombre || !fecha){
        alert("Por favor completa todos los campos")
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();

    hoy.setHours(0,0,0,0);
    if(fechaSeleccionada < hoy){ //La fdecha agregada es pasada a la de hoy
        alert("Se cargó una fecha pasada");
        return;
    }

    const nuevoEvento ={
        id:Date.now(),
        nombre,
        fecha
    }

    eventos.push(nuevoEvento)//agrego elemento al array

    mostrarEventos();
}

//Inicializar

document.addEventListener("DOMContentLoaded",() =>{
    cargarEventos();
    formularios.addEventListener("submit", agregarEvento) //Cuando escuches submit, ejecuta la funcion

})