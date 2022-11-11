import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';



export default function HeaderNav () {
    
    
    return(
      
      <Navbar className='justify-content-end'  style={{border: "1px solid"}}>
        <div className='d-block rounded-circle overflow-hidden' style={{marginRight: "10px"}} >
			    <Image src='None.png' alt='Foto'  style={{width:" 32px ", height:" 32px"}}/>
        </div>
      </Navbar>
    )
}
