import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Search ({setQuerySearch}) {
    

  const wep = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setQuerySearch(e.target.descripcion.value)
  }


    return(
      
      <div className="d-flex align-items-center"
      style={{
        position: "fixed",
        top: "42px",
        left: "0px",
        right: "0px",
        height: "55px",
        backgroundColor: "white",
        justifyContent: "center",

      }}>

          <Form className="d-flex" onSubmit={wep}>
          
            <Form.Group controlId="codigo">
              <Form.Control type="number" placeholder="Código" style={{ fontSize: "0.85rem", width:"75px"}}/>
            </Form.Group>
          
            <Form.Group className='ms-2' controlId="descripcion">
              <Form.Control type="search" placeholder="Descripción" style={{ fontSize: "0.85rem"}}/>
            </Form.Group>
                        
            <Button className='ms-2' type="submit" variant="outline-primary" style={{ fontSize: "0.85rem"}}>Buscar</Button>
            
          </Form>
                  
      </div>

    )
} 