import './App.css';
import Header from './components/Header.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
     <Header/>
      <Content/>
      <Footer />
    </div> 
  );
} 

export default App;
 