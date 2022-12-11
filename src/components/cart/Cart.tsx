import React from "react";
import { CartLogo, LabelCart, MainContainer } from "./CartStyled";

function Cart() {
  return(
  <MainContainer>
    <CartLogo src="logo/card.svg" alt="" />
    <LabelCart>Your bag is empty</LabelCart>
  </MainContainer>
  );
}

export default Cart;
