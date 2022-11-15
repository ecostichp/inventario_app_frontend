import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';



export default function Master () {
    
    
  return(
        
    <>
      <div className='card card-body p-1'>
      <div className="mt-1 rounded-2 " style={{boxShadow: "0px 0px 15px #adb5bd"}}>
        <div className="container justify-content-between d-flex p-1 border border-secondary border-opacity-50  rounded-2">
          <div className="col-3 text-center">
              <h6>Equipos</h6>
              <small className="text-muted"> Todos </small>
          </div>             
          <div className="col-3 text-center">
              <h6>Fecha:</h6>
              <small className="text-muted">fecha</small>
          </div>
          <div className="col-3 text-center">
          <SplitButton variant="outline-secondary" id="dropdown-basic-button" title="Usuarios en curso">
              <Dropdown.Item href="#/action-1">Usuario</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Usuario</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Usuario</Dropdown.Item>
          </SplitButton>  
          </div>            
        </div>
              
              
                        
        <div className="container text-start mt-1 border border-secondary border-opacity-50 rounded-2">

          <Table bordered className="table table-hover">
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>

            </tbody>
            </Table>
          </div>
      </div>
    </div>
    </>
)
} 
                
              
    