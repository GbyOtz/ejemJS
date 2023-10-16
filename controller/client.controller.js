import { clientServices } from "../service/client_service.js";
const crearNuevaLinea=(nombre,email,id)=>{
    const filaTabla= document.createElement('tr');
    const contenido=`
    <td class="td" data-td>
    ${nombre}
    </td>
    <td> ${email} </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
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
        clientServices.eliminarClient(id).then(respuesta=>{
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
clientServices
.listaClient()
  .then((data)=>{
      data.forEach((perfil) => {
            const nuevaLinea=crearNuevaLinea(perfil.nombre,perfil.email);
            tabla.appendChild(nuevaLinea);
      })
  })
  .catch((error)=>{ alert("Error", error);})