import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CardEquipos () {

	return(
		<>
		<div  style={{backgroundColor: "#f1f1f1"}}>
			<main className="justify-content-center" style={{backgroundColor:"white"}}>
				<div style={{height: "1000px", boxShadow: "0px 0px 15px #adb5bd"}}>			
					<Row xs={2} className="g-2 mt-2">
						{Array.from({ length: 2 }).map((_, idx) => (
							<Col className="ms-2" style={{width: "46%" }}>
								<Card>
									<Card.Body>
										<Card.Title className='text-center'>Equipo <br /> #01</Card.Title>
											<div className='d-flex justify-content-center card-img'>
											<Image src="none.png" style={{width: "30%" }}/>
											</div>
											<Card.Text>
											Nombre Apellido 
											<br />
											Almacen 
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					<Row xs={2} className="g-2 mt-4">
						{Array.from({ length: 2 }).map((_, idx) => (
							<Col className="ms-2" style={{width: "46%" }}>
								<Card>
									<div className="card-body">
										<Card.Title className='text-center'>Almacen #</Card.Title>
											<div className='d-flex mb-1 justify-content-start card-img'>
											<Image src="none.png" style={{width: "30%" }}/>
											<p style={{marginInlineStart: "10px", marginBlockstart: "2px"}}>Nombre</p>
											</div>
											<div className='d-flex mb-1  justify-content-start card-img'>
											<Image src="none.png" style={{width: "30%" }}/>
											<p style={{marginInlineStart: "10px", marginBlockstart: "2px"}}>Nombre</p>
											</div>
											<div className='d-flex mb-1  justify-content-start card-img'>
											<Image src="none.png" style={{width: "30%" }}/>
											<p style={{marginInlineStart: "10px", marginBlockstart: "2px"}}>Nombre</p>
											</div>
											<div className='d-flex mb-1  justify-content-start card-img'>
											<Image src="none.png" style={{width: "30%" }}/>
											<p style={{marginInlineStart: "10px", marginBlockstart: "2px"}}>Nombre</p>
											</div>
									</div>
								</Card>
							</Col>
						))}
					</Row>
				</div>
			</main>
	</div>
	</>

	)
}
