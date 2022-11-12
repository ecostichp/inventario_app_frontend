import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import Buscador from '../components/Buscador';
import TableConteo from '../page_layouts/TableConteo';


export default function Home () {
    
    
  return(
    <div  style={{backgroundColor: "#f1f1f1"}}>
      <HeaderNav />
      
      <main className="justify-content-center" 
        style={{
          backgroundColor:"white", 
        }}>
      <Buscador />
      <div style={{height: "1000px", boxShadow: "0px 0px 15px #adb5bd"}}>
      <TableConteo />
      </div>
      </main>
      
      <FooterNav />

    </div>

  )
}
