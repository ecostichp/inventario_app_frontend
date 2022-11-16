import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import Buscador from '../components/Buscador';
import TableProductos from '../components/TableProductos';
import axios from 'axios'


export default function Buscar ({data}) {
    
    
  return(
    <div className='d-flex' >
    

      <HeaderNav/>
      <Buscador /> 

      
      <main style={{position: "relative", top: "100px"}}>
      
          { data ? (
             
              <TableProductos data={data}/>  
              
             
            )  : <span>Cargando...</span> 
          }
            
         
      </main>
      
      <FooterNav />

    </div>

  )
}

Buscar.getInitialProps = async ctx => {
  
  const endpoint ='/productos/'

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API+endpoint)
    const data = res.data
    return {data}
  } 
  catch (error) {
    return {error}
  }
}
