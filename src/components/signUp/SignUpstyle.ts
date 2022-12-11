import styled from "styled-components";
import { Divider, TextField } from "@mui/material";

export const Main= styled.div`
  padding:15px;
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
/* position: absolute; */
padding:15px;
  /* top: 30px; */
  /* left: 0px; */
  background-color: white;
  font-size: 28px;
  text-align: center;
  /* padding: 10px; */
  /* z-index: 2; */
  justify-content: center;
  align-items: center;
  text-align: center;
  /* height:45%; */

  width: 100%;
`;
export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
`;
export const InputStyle = styled(TextField)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  gap: 8px;

  width: 48%;
  height: 52px;
`;
export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 10px;
  width: 206px;
  height: 48px;
  background: #000000;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  color: #ffffff;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;

export const LegendsetStyled = styled.legend`
  width: 311px;
  height: 26px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;

  color: #000000;
`;
export const CloseStyled = styled.div`
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  height: 100%;

  left: 0;
`;
export const ButtonDivStyled = styled.div`
  top: 100%;
`;
export const SignUPDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  align-items: center;
  width:100%;
`;
export const LogInImg = styled.img`
  padding-top: -1%;
  width: 33px;
  height: 33px;
  display: flex;
  float:left;
`;
  export const ForgotPasswordLink= styled.a`
  font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;

  
  `;
  export const SignUpButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 10px;
  width: 206px;
  height: 48px;
  background: white;
  border: 1px solid #000000;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  color: #000000;
  align-self: center;
  margin-top: 3%;
`;

export const DividerLabel = styled(Divider)`
  width: 100%;
`;
