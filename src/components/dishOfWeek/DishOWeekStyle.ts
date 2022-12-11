import styled from "styled-components";
export const MainContainer = styled.div`
  padding-top: 25px;
`;

export const SliderDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  padding-right: 20px;
`;
export const MainContainerDish = styled.div`
  padding-left: 20px;
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

export const DishName = styled.h3`
  width: 100%;
  height: 2%;
`;

export const TitleStyle=styled.h3`

height: 35px;
padding-left: 100px;
top: 1902px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
/* identical to box height, or 194% */

letter-spacing: 1.25px;
text-transform: uppercase;
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