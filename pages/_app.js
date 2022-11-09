import '../styles/globals.css'
import Layout from '../components/Layout/layout.component'
import { NavcontextProvider } from '../context/navcontext'
function MyApp({ Component, pageProps }) {
  return (
   <NavcontextProvider>
     <Layout>
      <Component {...pageProps} />
    </Layout>
   </NavcontextProvider>
  )
}

export default MyApp
