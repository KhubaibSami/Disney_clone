import React from "react";
import Header from "./../components/Navbar/header/header";
import Slider from "../components/services/slider";
import Card from "../components/cards/card";
import GenreMovieList from "../components/movies/movies";

const LandingPAge = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Card />
      <GenreMovieList />
    </div>
  );
};

export default LandingPAge;
