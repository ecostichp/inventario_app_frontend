import { useState, useEffect } from 'react';
import Search from '../components/Search';
import TableSearch from '../components/TableSearch';
import axios from 'axios';


export default function Buscar ( {listaProductos} ) {
   
  const [querySearch,setQuerySearch]=useState("")
  const [filterProductos,setfilterProductos]=useState()
  
  
  return(
    <div className='d-flex' >

        <Search props={setQuerySearch} /> 
        <TableSearch props = {{listaProductos: listaProductos, 
                              setfilterProductos: setfilterProductos,
                              filterProductos: filterProductos,
                              querySearch: querySearch}}/>
         
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
