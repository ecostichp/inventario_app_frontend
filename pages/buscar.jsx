import { useState, useEffect } from 'react';
import Search from '../components/Search';
import TableSearch from '../components/TableSearch';
import axios from 'axios';


export default function Buscar ( {listaProductos} ) {
  
  console.log('componente BUSCAR')
  console.log('listado de productos',listaProductos)
  
  
  const [filterProductos,setfilterProductos]=useState([])
  
  const propsTableSearch = {listaProductos: listaProductos, 
                          setfilterProductos: setfilterProductos,
                          filterProductos: filterProductos}

  return(
    <div className='d-flex' >

        <Search/> 
        <TableSearch {...propsTableSearch}/>
         
    </div>


  )
}

Buscar.getInitialProps = async ctx => {
  
  const endpoint ='/productos/'

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API+endpoint)
    const listaProductos = res.data
    return {listaProductos}
  } 
  catch (error) {
    return {error}
  }
}
