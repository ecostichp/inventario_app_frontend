import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function TableConteo () {
    
    
    return(
      <div className='justify-content-center align-items-center'style={{ height:"20vh", padding: "10%", backgroundColor:"lightgrey"}}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </div>

    )
} 