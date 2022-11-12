import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function TableConteo () {
    
    
    return(
      <div className="d-flex align-items-center"
      style={{
        padding:"5%", 
        position: "sticky",
        top: "42px",
        left: "0px",
        right: "0px",
        backgroundColor: "white",
        justifyContent: "center"
      }}>
      
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              />
              <Button className='ms-2' variant="outline-primary">Buscar</Button>
            </Form>
          </div>

    )
} 