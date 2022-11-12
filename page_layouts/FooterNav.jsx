import Nav from 'react-bootstrap/Nav';


export default function FooterNav () {
        
    return(
        <div className="d-flex align-items-center" 
        style={{
          backgroundColor:"white", 
          boxShadow: "0px 0px 15px #adb5bd",
          position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
          height: "40px",
          fontSize:"1.3rem",
          justifyContent: "space-evenly"
        }}>
        
            <Nav.Item>
                <Nav.Link href="/home"><i className="bi bi-house-fill"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1"><i class="bi bi-1-circle"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" disabled><i class="bi bi-2-circle"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled><i class="bi bi-files"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled"><i class="bi bi-search"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled"><i class="bi bi-people"></i></Nav.Link>
            </Nav.Item>
        </div>
    )
}
