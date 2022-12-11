import React from "react";

import { restaurant } from "../../restaurantData/restaurantData";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import {
  MainContainer,
  DishDiv,
  DishImg,
  DishDescription,
  DishSpicyImg,
  DishPrice,
  DishName,
  DishStyle,
  AllRestaurant,
  SignatureDishTitle,
  MainContainerDish,
  SliderDiv,
} from "./SliderStyl";

function SliderRange() {
 
  return (
    <MainContainer>
      <SignatureDishTitle>Signature Dish Of:</SignatureDishTitle>

      <SliderDiv>
        {restaurant.map((res) => (
          <MainContainerDish>
            <DishImg src={res.image} alt="" />
            <DishDiv>
              
                <DishName>{res.nameofdish}</DishName>
              
              <DishDescription>{res.description}</DishDescription>
              <div>
                <DishSpicyImg src={res.signatureLogo} alt="" />
              </div>
              <DishPrice> {res.price}₪</DishPrice>
            </DishDiv>
          </MainContainerDish>
        ))}
        </SliderDiv>
      
      <AllRestaurant>
        <AllRestaurants />
      </AllRestaurant>
    </MainContainer>
  );
}
export default SliderRange;
