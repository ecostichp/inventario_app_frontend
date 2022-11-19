import Search from '../components/Search';
import TableSearch from '../components/TableSearch';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Buscar () {

  const getInitialProps = (endpoint) => {
    const [listaProductos, setListaProductos] = useState()
    const [error, setError] = useState()
    
    useEffect(()=>{
      axios.get(process.env.NEXT_PUBLIC_API+endpoint)
      .then(listaProductos => setListaProductos(listaProductos))
      .catch(err => setError(err))
    })
  }
  
  console.log('componente BUSCAR')
  console.log('listado de productos',listaProductos)
  
  return(
    <div className='d-flex' >

        <Search/> 
        <TableSearch listaProductos={listaProductos}/>
         
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
