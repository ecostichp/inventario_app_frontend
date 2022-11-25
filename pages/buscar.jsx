import Search from '../components/Search';
import TableSearch from '../components/TableSearch';
import axios from 'axios';
import { useEffect, useState } from 'react';




export default function Buscar ({listaProductos}) {
  console.log('Soy Buscar')
  return(
    <div className='d-flex' >

        <Search listaProductos={listaProductos}/> 
        <TableSearch/>
         
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
