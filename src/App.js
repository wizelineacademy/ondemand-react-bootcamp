import Header from './components/Header'
import Footer from './components/Footer'

import Home from './views/Home'

import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
