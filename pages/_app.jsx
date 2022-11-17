import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainLayout from '../page_layouts/main_layout';


function MyApp({ Component, pageProps }) {
  
  if ( !Component.getLayout ) {
  
  return (
  
    <MainLayout> 

      <Component {...pageProps} />

    </MainLayout>
     
  )
  }
  else {
   return <Component {...pageProps} />
  }
}

export default MyApp
