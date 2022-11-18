import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useSearch from '../hooks/useSearch';


export default function TableSearch ({listaProductos}) {
  console.log(listaProductos)
  
//   useEffect( () => {
    
//     const listaFiltradaProductos = listaProductos.filter(
//       (producto) =>
//       producto.descripcion.toLowerCase().indexOf(querySearch.toLowerCase()) > -1
//     )

//     setfilterProductos(listaFiltradaProductos)

// },[]
// )

//   if (filterProductos != undefined) {

//     return (
//       <div style={{position: "absolute", top: "100px"}} >

//         <Table bordered className="table table-hover">

//           <thead>
//             <tr>
//                 <th>Código</th>
//                 <th>Descripcion</th>
//             </tr>
//           </thead>
//           <tbody>
//           { 
//             filterProductos.map( ({id, codigo, descripcion}) => 
//                 (
//                 <tr key={id}>
//                   <td>{codigo}</td>
//                   <td>{descripcion}</td>
//                 </tr>
//                 )
//               )
//           } 

//           </tbody>
//         </Table>

//       </div>
//     )
//   } else {
//   return ( <span>Cargando...</span>)
//   }
}

