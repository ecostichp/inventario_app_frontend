import HeaderNav from '../page_layouts/HeaderNav';
import FooterNav from '../page_layouts/FooterNav';
import axios from 'axios'


export default function Home ( {data, error} ) {
    
    
  return(
    <div >
      <HeaderNav />
      
      <main className="justify-content-center">
        <h1> {data} </h1>
      </main>
      
      <FooterNav />

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
