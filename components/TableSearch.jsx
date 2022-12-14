import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';



export default function TableSearch () {

  let filterProductos

  console.log('componente TABLASEARCH')
  
  // const [arrayFiltradoProductos,setArrayFiltradoProductos]=useState([])

  
  useEffect( () => {
    console.log('Soy el efecto de TableSearch')
    // setfilterProductos(listaFiltradaProductos)
    },
    [])
  

  if (filterProductos != undefined) {

    return (
      <div style={{position: "absolute", top: "200px"}} >

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

