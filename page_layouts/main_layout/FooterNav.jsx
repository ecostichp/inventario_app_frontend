import Nav from 'react-bootstrap/Nav';


export default function FooterNav () {
        
    return(
        <div className="d-flex align-items-center" 
        style={{
          backgroundColor:"#ededed", 
          position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
          height: "40px",
          fontSize:"1.5rem",
          justifyContent: "space-evenly"
        }}>
        
            <Nav.Item>
                <Nav.Link href="/home"><i className="bi bi-house-door"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/buscar"><i className="bi bi-search"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><i className="bi bi-1-circle"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><i className="bi bi-2-circle"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><i className="bi bi-files"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><i className="bi bi-people"></i></Nav.Link>
            </Nav.Item>
        </div>
    )
}
