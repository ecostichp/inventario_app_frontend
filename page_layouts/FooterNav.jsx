import Nav from 'react-bootstrap/Nav';


export default function FooterNav () {
        
    return(
        <Nav style={{width:"100vw",  border: "1px solid", justifyContent:"space-around", fontSize:"1.25rem"}}>
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
        </Nav>
    )
}
