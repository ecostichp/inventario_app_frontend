import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Buscador () {
    
    
    return(
      <div className="d-flex align-items-center"
      style={{
        position: "fixed",
        top: "42px",
        left: "0px",
        right: "0px",
        height: "55px",
        backgroundColor: "blue",
        justifyContent: "center",

      }}>
      
          <Form className="d-flex">
          
            <Form.Group>
              <Form.Control type="number" placeholder="Código" aria-label="Search" style={{ fontSize: "0.85rem", width:"75px"}}/>
            </Form.Group>
          
            <Form.Group className='ms-2'>
              <Form.Control type="search" placeholder="Descripción" aria-label="Search" style={{ fontSize: "0.85rem"}}/>
            </Form.Group>
          
              
            <Button className='ms-2' variant="outline-primary" style={{ fontSize: "0.85rem"}}>Buscar</Button>
            
          </Form>
        
      </div>

    )
} 