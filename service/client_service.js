

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

const listaClient=()=>{
  return fetch('http://localhost:3000/perfil').then((respuesta)=>respuesta.json());
}

export const clientServices={
  listaClient
};



