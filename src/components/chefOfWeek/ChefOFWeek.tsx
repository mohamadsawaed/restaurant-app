import React from "react";
import { ChefImg, MainContainer, ParagraphStyle, StyleNameChef, TitleStyle } from "./ChefOfweekstyle";

function ChefOFWeek() {
  return (
    <MainContainer>
        <TitleStyle>Chef of the week:</TitleStyle>
      <ChefImg src="/logo/chef.svg" />
      <StyleNameChef>Yossi Shitrit</StyleNameChef>
      <ParagraphStyle>
        Chef Yossi Shitrit has been living and breathing his culinary dreams for
        more than two decades, including running the kitchen in his first
        restaurant, the fondly-remembered Violet, located in Moshav Udim.
        Shitrit's creativity and culinary acumen born of long experience are
        expressed in the every detail of each and every dish.
      </ParagraphStyle>
    </MainContainer>
  );
}
export default ChefOFWeek;
