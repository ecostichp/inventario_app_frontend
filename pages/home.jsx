import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';


export default function Home () {
    
    
  return(
    <div className= "d-flex row" style={{height: "500px", backgroundColor:"lightblue"}}>
      <header>
        <HeaderNav />
      </header>
      
      <main className="flex-grow-1" style={{backgroundColor:"lightgrey"}}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
      </main>
      
      <footer>
        <FooterNav />
      </footer>
    </div>
  )
}
