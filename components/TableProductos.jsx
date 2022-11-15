import Table from 'react-bootstrap/Table';


export default function TableProductos () {
    
    
  return(
        
    <div className="p-2">

      <div className="container text-center border border-secondary border-opacity-50 rounded-2">

        <Table className="table table-hover">
          <thead>
            <tr>
                <th>Código</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>30064</td>
                <td>Taladro Makita</td>
                <td>2250</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Rotomartillo</td>
                <td>5250</td>
            </tr>
          </tbody>
          </Table>
      </div>

    </div>
)
} 
                
              
    