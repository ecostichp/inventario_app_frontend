import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function Home( { }) {
  
  
  const [usuario, setUsuario] = useState()
  const [contraseña, setContarseña] = useState()
 

  useEffect (() => {

  })


  const click_submit = (e) => {
    e.preventDefault()
    console.log(e.target.login_usuario.value)
    console.log(e.target.login_contraseña.value)
  } 

  return (
    
    <main style={{display:"flex", justifyContent: "center"}}>
      
    
    <div>
      <Form onSubmit={click_submit}>

        <FloatingLabel controlId="login_usuario" name ="login_usuario" value = {usuario} label="Usuario" className="m-3">

          <Form.Control type="text"  placeholder="Usuario" />
        </FloatingLabel>
        <FloatingLabel controlId="login_contraseña" name = "login_contraseña"  value= {contraseña} label="Contaseña" className="m-3">
          <Form.Control type="password" placeholder="Contaseña" />
        </FloatingLabel>
        <Button className="m-3" variant="primary" type='submit'>Entrar</Button>
      </Form>
    </div>
 
    </main>
  )
}