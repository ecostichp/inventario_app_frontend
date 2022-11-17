import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useSearch from '../hooks/useSearch';


export default function TableSearch ({listaProductos}) {
  
  
  
  const [filterProductos,setfilterProductos]=useState()
  


  useEffect( () => {
    
    let querySearch = '44478'

    const pancho = listaProductos.filter(
      (producto) =>
      producto.descripcion.toLowerCase().indexOf(querySearch.toLowerCase()) > -1
    )

    setfilterProductos(pancho)

},
)




  if (filterProductos != undefined) {

    return (
      <div style={{position: "absolute", top: "5px"}} >

        <Table bordered className="table table-hover">

          <thead>
            <tr>
                <th>Código</th>
                <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
          { 
            filterProductos.map( ({id, codigo, descripcion}) => 
                (
                <tr key={id}>
                  <td>{codigo}</td>
                  <td>{descripcion}</td>
                </tr>
                )
              )
          } 

          </tbody>
        </Table>

      </div>
    )
  } else {
  return ( <span>Cargando...</span>)
  }
}

