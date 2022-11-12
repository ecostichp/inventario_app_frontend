import { Row, Col, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


export default function TableConteo () {
    
    
  return(
        
    <>
      <div className='card card-body p-1'>
      <div className="mt-1 rounded-2 " style={{boxShadow: "0px 0px 15px #adb5bd"}}>
        <div className="container justify-content-between d-flex p-1 border border-secondary border-opacity-50  rounded-2">
          <div className="col-3 text-center">
              <h6>1° Conteo</h6>
              <small className="text-muted"> Equipo 01 </small>
          </div>             
          <div className="col-3 text-center">
              <h6>Fecha:</h6>
              <small className="text-muted">fecha</small>
          </div>
          <div className="col-3 text-center">
              <h6>Usuario</h6>
              <small className="text-muted">Nombre</small>
          </div>            
        </div>
                        
        <div className="container text-center mt-1 border border-secondary border-opacity-50 rounded-2">

          <Table className="table table-hover">
            <thead>
              <tr>
                  <th>Código</th>
                  <th>Descripcion</th>
                  <th>Linea</th>
                  <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>30064</td>
                  <td>Taladro Makita</td>
                  <td>MHK</td>
                  <td>2250</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Rotomartillo</td>
                  <td>MAKITA</td>
                  <td>5250</td>
              </tr>
            </tbody>
            </Table>
          </div>
      </div>
    </div>
    </>
)
} 
                
              
    