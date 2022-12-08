import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useSearch from '../hooks/useSearch';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ModalAgregar from './ModalAgregar';


export default function Search ({listaProductos}) {
  
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState({codigo:"", descripcion:""});

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDataModal({
      codigo: e.target.parentElement.children[0].innerText,
      descripcion: e.target.parentElement.children[1].innerText
    })
    setShow(true)}
  
  console.log('Se renderiza componente SEARCH')
  
  
  const [listaFiltradaProductos, setListaFiltradaProductos] = useState([])
  console.log('componente SEARCH', listaFiltradaProductos)


  
  const onSubmitSearch = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const querySearch = e.target.descripcion.value
    setListaFiltradaProductos(useSearch(listaProductos, querySearch))
  }
  
  useEffect(()=>{
    console.log('soy el efecto de Search', listaFiltradaProductos)
    
  },[])
  
  

  

    return(
      <>
      
      
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

          <Form className="d-flex" onSubmit={onSubmitSearch}>
          
            <Form.Group controlId="codigo">
              <Form.Control type="number" placeholder="Código" style={{ fontSize: "0.85rem", width:"75px"}}/>
            </Form.Group>
          
            <Form.Group className='ms-2' controlId="descripcion">
              <Form.Control type="search" placeholder="Descripción" style={{ fontSize: "0.85rem"}}/>
            </Form.Group>
                        
            <Button className='ms-2' type="submit" variant="outline-primary" style={{ fontSize: "0.85rem"}}>Buscar</Button>
            
          </Form>
                  
      </div>

      <div  style={{top: "100px", width: "356px", height: "520px", overflow: "scroll", position: "absolute",}}>

      <Table bordered className='table table-hover' style={{display: "inline-block", padding: "8px"}} >

        <thead className='table-active'>
          <tr>
              <th>Código</th>
              <th>Descripcion</th>
              <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
        { 
          listaFiltradaProductos.map( ({id, codigo, descripcion}) => 
              (
              <tr onClick={handleShow} key={id}>
                <td>{codigo}</td>
                <td>{descripcion}</td>
                <td></td>
              </tr>
              )
            )
        } 

        </tbody>
        <ModalAgregar show={show} handleClose={handleClose} dataModal={dataModal}/>
      </Table>
      </div>

      </>
    )
} 