import React from "react";
import { restaurant } from "../../restaurantData/restaurantData";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import {
  MainContainer,
  DishDiv,
  AllRestaurant,
  DishImg,
  MainContainerDiv,
  ChefNameDiv,
  RestaurantNameDiv,
  TitleStyled
} from "./popularResturantStyle";
import { MainContainerDish } from "../slider/SliderStyl";


function PopularRestaurant() {
  return (
    <MainContainerDiv>
      <TitleStyled>popular restaurant in epicure:</TitleStyled>
      <MainContainer>
        {restaurant.map((res) => (
          <MainContainerDish>
            
            <DishImg src={res.image} alt="" />
            <DishDiv>
              <RestaurantNameDiv>{res.restaurantName}</RestaurantNameDiv>

              <ChefNameDiv>{res.chefname}</ChefNameDiv>
            </DishDiv>
          </MainContainerDish>
        ))}
      </MainContainer>

      <AllRestaurant>
        <AllRestaurants />
      </AllRestaurant>
    </MainContainerDiv>
  );
}
export default PopularRestaurant;
