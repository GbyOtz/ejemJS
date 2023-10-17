import { productoServices } from "../service/producto_service.js";
const crearNuevaLinea=(nombre,precio,descripcion,id)=>{
    const filaTabla= document.createElement('tr');
    const contenido=` 
    <td class="td" data-td>
    ${nombre}</td>
    <td> ${precio} </td>
    <td> ${descripcion} </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_producto.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    filaTabla.innerHTML =contenido;
    const btnEliminar= filaTabla.querySelector("button")
    btnEliminar.addEventListener("click",()=>{
        const id=btnEliminar.id;//parametro de boton
        productoServices.eliminarProducto(id).then(respuesta=>{
          alert(respuesta)
        }).catch(error=>alert("error",error))
    });

    return  filaTabla;
};

const tabla=document.querySelector('[data-table]')
//metodos http para cada metodo del CRUD
//create-post
//read-get
//update-put y patch
//delete-delete
productoServices
.listaProducto()
  .then((data)=>{
      data.forEach((perfil2) => {
            const nuevaLinea=crearNuevaLinea(perfil2.nombre,perfil2.precio, perfil2.descripcion, perfil2.id);
            tabla.appendChild(nuevaLinea);
      });
  })
  .catch((error)=> alert("error", error));