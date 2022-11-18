import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useSearch from '../hooks/useSearch';


export default function TableSearch ({listaProductos, setfilterProductos, filterProductos}) {

  console.log('componente TABLASEARCH')
  console.log('array filtrado resultante',filterProductos)
  
  useEffect( () => {
    console.log('es el principio del efecto')
    let querySearch ='bloque'
    const listaFiltradaProductos = listaProductos.filter(
      (producto) => {
      producto.descripcion.toLowerCase().indexOf(querySearch.toLowerCase()) > -1
      })

    setfilterProductos(listaFiltradaProductos)
    console.log('retorno del EFECTO',listaFiltradaProductos)

},[]
)

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

