import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import Buscador from '../components/Buscador'


export default function Home () {
    
    
  return(
    <div  style={{backgroundColor: "#f1f1f1"}}>
      <HeaderNav />
      
      <main className="justify-content-center" 
        style={{
          backgroundColor:"white", 
        }}>
      <Buscador />
      <div style={{height: "1000px", backgroundColor:"steelblue", boxShadow: "0px 0px 15px #adb5bd"}}>
        <h1>Tabla</h1>
      </div>
      </main>
      
      <FooterNav />

    </div>

  )
}
