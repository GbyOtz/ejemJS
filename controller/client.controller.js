import { clientServices } from "../service/client_service.js";
const crearNuevaLinea=(nombre,email)=>{
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
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    filaTabla.innerHTML =contenido;
    return  filaTabla 
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