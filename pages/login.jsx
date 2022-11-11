import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import PasswordToggle from '../components/PasswordToggle'
import { useState } from 'react';


export default function LoginFinder () {

  // Form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
  }
    
    
    return(
        <div className='container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5 position-absolute top-50 start-50 translate-middle' style={{backgroundColor: "#f1f1f1"}} >
        <div className='card card-body rounded-5' style={{maxWidth: '940px', boxShadow: "0px 0px 15px #adb5bd"}}> 
            <div className='row mx-0 align-items-center '>
              <div className='col-md-6 border-end-md p-2 p-sm-5'>
                  <h2 className='h3 mb-4 mb-sm-5 text-center'>Bienvenido<br />Inventario San José 2022</h2>
                    <div className='d-flex justify-content-center'>
                      <Image src='Logo2021.png' width={300} alt='Logo' />
                    </div>
              </div>
              <div className='col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
                    
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId='si-email' className='mb-4'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Ingresa tu Usuario'
                      required
                    />
                  </Form.Group>
                  <Form.Group className='mb-4'>
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                      <Form.Label htmlFor='si-password' className='mb-0'>Contraseña</Form.Label>
                    </div>
                    <PasswordToggle id='si-password' placeholder='Ingresa tu Contraseña' required />
                  </Form.Group>
                  <Button type='submit' size='lg' variant='primary w-100'>Enviar</Button>
                </Form>
              </div>
            </div>  
          </div>  
        </div>

    )
}