import styled from "styled-components";
export const MainContainerDiv = styled.div`
  padding-top: 25px;
`;
export const MainContainerDish = styled.div`
  padding-left: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  padding-right: 20px;
`;
export const DishDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;

  background: #f9f4ea;
`;
export const DishImg = styled.img`
  width: 245px;
  height: 152px;
`;

export const AllRestaurant = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10%;
  width: -1%;
  height: 35px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;

  text-align: right;
  letter-spacing: 2px;
  text-transform: capitalize;

  color: #000000;
`;
export const ChefNameDiv = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: 1.97px;
`;
export const RestaurantNameDiv = styled.div`
  width: 54px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 2.67px;

  color: #000000;
`;
export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: 1.25px;
  text-transform: uppercase;
`;
