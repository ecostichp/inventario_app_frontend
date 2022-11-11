import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import Buscador from '../components/Buscador'


export default function Home () {
    
    
  return(
    <div>
      <header style={{ position:"sticky", top:"0" }}>
        <div>
          <HeaderNav />
          <Buscador />
        </div>
          
      </header>

      <main>
        <div>      
          <div className='text-center' style={{ height: "1000px", backgroundColor:"lightblue" }}>
            <h1>Tabla</h1>
          </div>
        </div>
      </main>

      <footer style={{ position:"fixed", bottom:"0" }}>
        <div>
          <FooterNav />
        </div>
      </footer>

    </div>

  )
}
