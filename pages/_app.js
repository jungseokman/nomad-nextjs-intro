import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css"

const app = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps}/>
            
        </Layout>
    )
}

export default app;