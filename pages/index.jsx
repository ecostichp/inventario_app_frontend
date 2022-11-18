import axios from 'axios'


export default function Home ( {data, error} ) {
    
  return(

  <div className='d-flex' >

    <h1 style={{position: "relative", top:'100px'}}> {data} </h1>
       
  </div>

  )
}

Home.getInitialProps = async ctx => {
  
  const endpoint ='/'

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API+endpoint)
    const data = res.data
    console.log('soy dataaa',data)
    return {data}
  } 
  catch (error) {
    return {error}
  }
}
