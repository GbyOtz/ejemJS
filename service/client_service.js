

// const listaClient=()=>{
//   const promesa=new Promise((resolve,reject)=>{
//       const http=new XMLHttpRequest();
//       http.open('GET','http://localhost:3000/perfil')
//       http.send();
//       http.onload=()=>{
//         const respuesta = JSON.parse(http.response);
//         if (http.status>=400) {
//           reject(respuesta)
//         }else{
//           resolve(respuesta)
//         };
//       };
//   }); 
//   return promesa;
// }

import { uuid } from "uuidv4";

const listaClient=()=>{
  return fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());
}

const crearClient=(nombre,email)=>{
  return fetch("http://localhost:3000/perfil",{
    method:"POST",//especificar metodo POST es decir para insertar datos
    headers:{//especificar tipo de archivo que POST envia al servidor que es de tipo json
      "content-Type":"application/json",
    },
    body:JSON.stringify({nombre,email,id: uuid.v4()})//sirve para transformas el archivo json a string
  });
};

const detalleClient=(id)=>{//recupera los datos para luego modificar 
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json())
}

const actualizarClient=(nombre,email,id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:'PUT',//metodo PUT es para editar o actualizar
    headers:{
      "content-Type":"aplecation/json",
    },
    body:JSON.stringify({nombre,email})//sirve para transformas el archivo json a string
  })
  .then((respuesta)=>(respuesta))
  .catch((error)=>alert("error",error))
}

const eliminarClient=(id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:'delete',
  })
}

export const clientServices={
  listaClient,
  crearClient,
  detalleClient,
  actualizarClient,
  eliminarClient
};



