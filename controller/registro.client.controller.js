import { clientServices } from "../service/client_service";

const formulario=document.querySelector('[data-form]');
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();//sirve para que el evento no actue por si solo o todo este mas controlado
    const nombre= document.querySelector("[data-nombre]").value;
    const email= document.querySelector("[data-email]").value;
    clientServices
        .crearClient(nombre,email)
        .then(()=>{
            window.location.href="/screens/registro_completado.html";
        })
        .catch((error)=>alert("error",error))
})