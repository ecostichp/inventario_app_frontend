import Table from 'react-bootstrap/Table';


export default function TableProductos ({data}) {
    
    
  return(
      <div >

        <Table bordered className="table table-hover">

          <thead>
            <tr>
                <th>Código</th>
                <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
          { 
            data.map( ({id, codigo, descripcion}) => {
                const key = id
                return (
                <tr id={key}>
                  <td>{codigo}</td>
                  <td>{descripcion}</td>
                </tr>
                )
              })
          } 

          </tbody>
          </Table>
      </div>
  
)
} 
