import { productoServices } from "../service/producto_service.js";

const formulario=document.querySelector("[data-form]");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();//sirve para que el evento no actue por si solo o todo este mas controlado
    const nombre= document.querySelector("[data-nombre]").value;
    const precio =document.querySelector("[data-precio]").value;
    const descripcion =document.querySelector("[data-descripcion]").value;
    productoServices
        .crearProducto(nombre,precio,descripcion)
        .then(()=>{
            window.location.href="/screens/registro_completadoProducto.html";
        })
        .catch((error)=>alert("error",error));
});
