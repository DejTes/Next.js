import '@/styles/globals.css'
import Context from "@/context/context";
import Layout from '@/components/layout';



//// Wrap our function in the Context Provider which will share state between pages
export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}
