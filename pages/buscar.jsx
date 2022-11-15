import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import Buscador from '../components/Buscador';
import TableProductos from '../components/TableProductos';
import axios from 'axios'


export default function Buscar () {
    
    
  return(
    <div>
      <HeaderNav />
      
      <main className="justify-content-center">
      
        <Buscador />
      
        <div style={{height: "1000px"}}>
        
          <h2>Tabla</h2>

          <TableProductos />
              
        </div>
      
      
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
