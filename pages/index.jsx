import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

export default function Home( {data, error} ) {
  
  
  const [usuario, setUsuario] = useState()
  const [contraseña, setContarseña] = useState()
 
  
  useEffect ( () => {

  })


  const click_submit = async e => {
    e.preventDefault()
    e.stopPropagation()

    const endpoint ='/login/'

    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API+endpoint,
      {
        usuario : e.target.login_usuario.value,
        contraseña : e.target.login_contraseña.value
      })
      console.log(res)
    } 
    catch (error) {
      console.log (error)
    }
    


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

    <div>
      <h1>{data.wep}</h1>
    </div>
 
    </main>
  )

}

Home.getInitialProps = async ctx => {
  
  const endpoint ='/'

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API+endpoint)
    const data = res.data
    return {data}
  } 
  catch (error) {
    return {error}
  }
  
}