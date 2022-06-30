import './Layout.scss';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'



export default function Layout({children}) {
    return (
        <div className="App">
            <Header />
             <div>{children}</div>   
            <Footer />
        </div>
    );
}