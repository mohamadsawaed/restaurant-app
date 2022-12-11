import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  SpicyImage,
  TitleStyled,
  VeganImage,
  VegitarianImage,
 
} from "./DishStyle"

function Dish(){
    const navigate = useNavigate();
    function spicy() {
        navigate("/spicy");
      }
      function vegan() {
        navigate("/vegan");
      }
      function vegitarian() {
        navigate("/vegitarian");
      }
    return(
        <MainContainer>
            <TitleStyled>Signature Dish Of:</TitleStyled>
             <SpicyImage alt="" src={"logo/Spicy.svg"}  onClick={spicy}/>
           <VeganImage src={"logo/Vegan.svg"} alt="" onClick={vegan} />
        <VegitarianImage src={"logo/Vegitarian.svg"} alt="" onClick={vegitarian}/>
         
        </MainContainer>
    );

}

export default Dish;