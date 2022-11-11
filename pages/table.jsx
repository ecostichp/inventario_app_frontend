import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'



export default function TableConteo () {
    
    
    return(
        <>
      <div className='position-absolute' style={{ top: '10px', right: '10px' }}>
				<Image src='None.png' alt='Foto'  style={{width:" 100px ", height:" 100px"}}/>
      </div>
				
		

      <Container>
			<Navbar bg="dark" className="row mx-0 align-items-center position-absolute top-50 start-50 translate-middle">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
							/>
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>

    </Navbar>

	</Container>
 
			

</>


    )
}




