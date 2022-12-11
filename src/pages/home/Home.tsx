import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/aboutUs/AboutUs";
import Dish from "../../components/dish/Dish";
import SearchBar from "../../components/searchBar/SearchBar";
import SliderRange from "../../components/slider/SliderRange";
import PopularRestaurant from "../../components/popularRestaurant/PopularRestaurant";
import ChefOFWeek from "../../components/chefOfWeek/ChefOFWeek";
import DishOfWeek from "../../components/dishOfWeek/DishOfWeek";


function Home() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
       <SearchBar/>
      </div>
      <div>
        <PopularRestaurant/>
      </div>
      <div>
        <Dish />
      </div>
      <div>
        <SliderRange/>
      </div>
      <div>
        <ChefOFWeek/>
      </div>
      <div>
        <DishOfWeek/>
      </div>
      <div>
        <AboutUs />
      </div>
      {/* <div><SignUp/></div> */}

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
