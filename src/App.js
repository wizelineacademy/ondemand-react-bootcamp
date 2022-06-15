import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';


import Header from './Components/Header';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
   

      <Header></Header>
      
  );
}

export default App;
