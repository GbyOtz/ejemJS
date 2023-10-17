//import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
const listaProducto=()=>{
    return fetch("http://localhost:3000/perfil2").then((respuesta)=>respuesta.json());
  }
  
  const crearProducto=(nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/perfil2",{
      method:"POST",//especificar metodo POST es decir para insertar datos
      headers:{//especificar tipo de archivo que POST envia al servidor que es de tipo json
        "content-Type":"application/json",
      },
      body:JSON.stringify({nombre,precio,descripcion,id: uuid.v4()}),//sirve para transformas el archivo json a string
    });
  };
  
  const detalleProducto=(id)=>{//recupera los datos para luego modificar 
    return fetch(`http://localhost:3000/perfil2/${id}`).then((respuesta)=>respuesta.json());
  };
  
  const actualizarProducto=(nombre,precio,descripcion,id)=>{
    return fetch(`http://localhost:3000/perfil2/${id}`,{
      method:'PUT',//metodo PUT es para editar o actualizar
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({nombre,precio,descripcion}),//sirve para transformas el archivo json a string
    })
    .then((respuesta)=>(respuesta))
    .catch((error)=>alert("error",error))
  };
  
  const eliminarProducto=(id)=>{
    return fetch(`http://localhost:3000/perfil2/${id}`,{
      method:'delete',
    })
  };
  
  export const productoServices={
    listaProducto,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto
  };