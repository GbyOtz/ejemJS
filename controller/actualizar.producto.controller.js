import { productoServices } from "../service/producto_service.js";

const formulario= document.querySelector("[data-form]");

const obtenerInfo =async()=>{
    const url= new URL(window.location);//saca info de la url
    const id = (url.searchParams.get("id"));//obtiene el id
    if (id==null){
        window.location.href="/screens/error.html"
    }
        
    const nombre = document.querySelector("[data-nombre]");
    const precio =document.querySelector("[data-precio]");
    const descripcion =document.querySelector("[data-descripcion]");

    try{
        const perfil2=await productoServices.detalleProducto(id);
        if(perfil2.nombre && perfil2.precio && perfil2.descripcion){
            nombre.value=perfil.nombre;
            email.value=perfil.precio;
            descripcion.value=perfil2.descripcion;
        }
        else{
            throw new Error();
        }
    }catch(error){
        console.log("Catch error", error);
        window.location.href="/screens/errorProducto.html";
    };
};

obtenerInfo();

    formulario.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        const url=new URL(window.location);
        const id= url.searchParams.get("id");//obtiene la id de todo un url
        
        const nombre= document.querySelector("[data-nombre]").value;
        const precio =document.querySelector("[data-precio]").value;
        const descripcion =document.querySelector("[data-descripcion]").value;

        clientServices.actualizarProducto(nombre,precio,descripcion,id).then(()=>{
            window.location.href="/screens/edicion_concluidaProducto.html";
        });
    });
