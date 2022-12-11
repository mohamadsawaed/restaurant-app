
import styled from "styled-components";
export const MainContainer = styled.nav`
display: flex;
    flex-direction: row;
    height: 46px;
    justify-content: space-between;
    /* margin: 1vh 10px; */

`;
export const HambrgrDiv = styled.div`
  width: 24px;
  height: 24px;
  
`;
export const AboutrDiv = styled.div`

  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  align-self: center;
  
`;

export const HambrgrImg = styled.img`
  padding-top: -1%;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: baseline;
`;
export const AboutImg = styled.img`
left:auto;
  right:auto;
  position:absolute;
`;

export const NavBarStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  gap:5px;

`;
export const LogInImg = styled.img`
  padding-top: -1%;
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: baseline;
`;
export const SearchImg = styled.img`
  padding-top: -1%;
  width: 33px;
  height: 33px;

  display: flex;
  justify-content: baseline;
`;
export const CardImg = styled.img`
  padding-top: -1%;
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: baseline;
`;

export const AppDrawer = styled.div`
  position: absolute;
  /*Takes element out of the flow of the page */
  top: 0;
  left: 5px;
  z-index: 1;
  min-height: 100%;
  height: auto;
  width: 70%;
  // transform: translateX(-200%);
  background-color: white;
  transition: all 0.5s ease-in;
  box-shadow: 1px 0 3px grey;
  margin-top: 79px;
`;
export const AppDrawerVisible = styled.div`
  transform: translateX(0);
  left: 0px;
  position: absolute;
  /*Takes element out of the flow of the page */
  top: 0;
  left: -275px;
  z-index: 1;
  min-height: 100%;
  height: auto;
  width: 70%;
  transform: translateX(-100%);
  background-color: white;
  transition: all 0.5s ease-in;
  box-shadow: 1px 0 3px grey;
  margin-top: 79px;
`;

export const AppDrawerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const MainUl = styled.ul`
  margin: 8px;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 6px;
  clear: both;
  /* display: inline-block; */
  overflow: hidden;
  white-space: nowrap;
  gap: 50px;
  text-decoration: none;
  color:black;
`;
export const LiStyle = styled.li`
  font-size: 22px;
  color: #0f0f0f;
  text-decoration: none;
  color:black;
`;
export const DivList = styled.div`
  margin: 0;
`;
export const SearchText = styled.input`
  width: 90%;
  border: none;
  background-color: transparent;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.29px;
`;
