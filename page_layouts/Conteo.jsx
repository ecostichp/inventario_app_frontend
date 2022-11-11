import { Row, Col, Card } from 'react-bootstrap';


export default function TableConteo () {
    
    
    return(
        <>
                <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Search</h4>
                            <p className="text-muted font-14 mb-4">A Table allowing search</p>

                            <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>    
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>

    )
}