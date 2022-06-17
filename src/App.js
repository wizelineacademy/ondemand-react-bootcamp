import React from "react";
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Grid from "./Components/Grid";
import FeatureProducts from "./Components/Feature-Product";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div>
      <Header></Header>
      <div className="container">
        <Slider></Slider>
        <hr></hr>
        <Grid></Grid>
        <hr></hr>
        <FeatureProducts></FeatureProducts>
      </div>
      <Footer text="Ecommerce created during Wizeline's Academy React Bootcamp"></Footer>
    </div>
  );
}

export default App;
