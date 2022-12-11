import React from 'react';
import { useNavigate } from "react-router-dom";
import { ChifsButton, ContactUsButton, HamburgerDiv, HamburgerImg, MainContainer, PrivacyPolicyBbutton, RestaurantBbutton, TermOfUsBbutton, } from './HamburgerStyled';



function Hamburger (props:any) {
  const navigate = useNavigate();
  function AllRestaurantPage() {
    navigate("/Restaurants");
  }
  function AllChifsPage() {
    navigate("/Restaurants");
  }

    return (
    <MainContainer>
        <HamburgerImg
    src="logo/vector.svg"
    alt="Xlogo"
    onClick={props.closeHeader}
    />
    <HamburgerDiv>
        <RestaurantBbutton onClick={AllRestaurantPage}>Restaurants</RestaurantBbutton>
    <ChifsButton onClick={AllChifsPage}>Chifs</ChifsButton>
    <ContactUsButton>Contact Us</ContactUsButton>
    <TermOfUsBbutton>Term of Use</TermOfUsBbutton>
    <PrivacyPolicyBbutton>Privacy Policy</PrivacyPolicyBbutton>
    </HamburgerDiv>
    
    
    </MainContainer>
    

    );
}



export default Hamburger;