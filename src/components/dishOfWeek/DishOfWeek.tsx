import React from 'react'
import { restaurant } from '../../restaurantData/restaurantData';
import {MainContainerDish,DishImg, DishDiv, DishName, SliderDiv, MainContainer, TitleStyle, AllRestaurant} from "./DishOWeekStyle"
import AllRestaurants from '../AllRestaurants/AllRestaurants';


function DishOfWeek(){
    return(
        <MainContainer>    
               <TitleStyle>Dish of th week</TitleStyle>
        <SliderDiv>
{restaurant.map((res) => (
            <MainContainerDish>
    <DishImg src={res.image} alt="" />
              
          <DishDiv>
                <DishName>{res.nameofdish}</DishName>
          </DishDiv>
        </MainContainerDish>
        ))}
        </SliderDiv>
        <AllRestaurant><AllRestaurants/></AllRestaurant>
        
        </MainContainer>);
 
}
export default DishOfWeek;