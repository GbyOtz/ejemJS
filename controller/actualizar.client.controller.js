import { clientServices } from "../service/client_service";

const formulario= document.querySelector("[data-form]");
const obtenerDatos=()=>{
    const url=new URL(window.location);
    const id= url.searchParams.get("id");//obtiene la id de todo un url
    if(id==null){
        window.location.href="/screens/error.html"
    }
    const nombre= document.querySelector("[data-nombre]")//selecciona el input
    const email=document.querySelector("[data-email]")
    
    //trabaja a traves del id
    clientServices.detalleClient(id).then((perfil)=>{//esta promesa rellena los datos desde el servidor a los 
        //inputs del formulario
        nombre.value=perfil.nombre,//el input que estaba vacio se rellena o iguala con la informacion del perfil
        email.value=perfil.email
    });

    obtenerDatos();

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
} 