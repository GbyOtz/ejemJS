import { clientServices } from "../service/client_service.js";

const formulario= document.querySelector("[data-form]");
// const obtenerDatos=()=>{
//     const url=new URL(window.location);
//     const id= url.searchParams.get("id");//obtiene la id de todo un url
//     if(id==null){
//         window.location.href="/screens/error.html"
//     }
//     const nombre= document.querySelector("[data-nombre]")//selecciona el input
//     const email=document.querySelector("[data-email]")
    
//     //trabaja a traves del id
//     clientServices.detalleClient(id).then((perfil)=>{//esta promesa rellena los datos desde el servidor a los 
//         //inputs del formulario
//         nombre.value=perfil.nombre//el input que estaba vacio se rellena o iguala con la informacion del perfil
//         email.value=perfil.email
//     });
// }

//     obtenerDatos();  //cambiar a async await

const obtenerInfo =async()=>{
    const url= new URL(window.location);//saca info de la url
    const id = (url.searchParams.get("id"));//obtiene el id
    if (id==null){
        window.location.href="/screens/error.html"
    }
        
    const nombre = document.querySelector("[data-nombre]");
    const email =document.querySelector("[data-email]");

    try{
        const perfil=await clientServices.detalleClient(id);
        if(perfil.nombre && perfil.email){
            nombre.value=perfil.nombre;
            email.value=perfil.email;
        }
        else{
            throw new Error();
        }
    }catch(error){
        console.log("Catch error", error);
        window.location.href="/screens/error.html";
    };
};

obtenerInfo();

    formulario.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        const url=new URL(window.location);
        const id= url.searchParams.get("id");//obtiene la id de todo un url
        
        const nombre= document.querySelector("[data-nombre]").value;
        const email= document.querySelector("[data-email]").value;

        clientServices.actualizarClient(nombre,email,id).then(()=>{
            window.location.href="/screens/edicion_concluida.html";
        });
    });
