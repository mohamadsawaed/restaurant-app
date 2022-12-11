import React from "react";

import { useNavigate } from "react-router-dom";
import{MainContainer,ImageLogoTitle,ImageAppStore,ImageGooglePlay,FirstParagraph,MainTitle} from "./AboutUsStyle"


function AboutUs() {
    const navigate = useNavigate();
    function logoTitle() {
        navigate("/restaurants");
      }
      function appStore() {
        navigate("/AppStore");
      }
      function googlePlay() {
        navigate("/GooglePlay");
      }

  return (
    <MainContainer>
        <ImageLogoTitle src={"/logo/LogoTitle.svg"} alt="" onClick={logoTitle}/>
        <ImageAppStore src="logo/AppStore.svg" alt="" onClick={appStore}/>
        <ImageGooglePlay src="logo/GooglePlay.svg" alt="" onClick={googlePlay}/>
      <MainTitle>ABOUT US:</MainTitle>
      <FirstParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
        justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
        blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
        Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
        eu ipsum. Cras porta malesuada eros.</FirstParagraph>
       
      
    </MainContainer>
  );
}
export default AboutUs;
