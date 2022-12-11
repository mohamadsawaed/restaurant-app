import React, { useState } from "react";

import {
  ButtonDivStyled,
  ButtonStyled,
  CloseStyled,
  DividerLabel,
  ForgotPasswordLink,
  InputStyle,
  LabelStyled,
  LegendsetStyled,
  LogInImg,
  Main,
  MainContainer,
  SignUpButton,
  SignUPDiv,
} from "./SignUpstyle";
import { Dialog, Divider } from "@mui/material";

function SignUp(props:any) {
  const [signUp, setSinUP] = useState(false);

  const toggleUignUp = () => {
    setSinUP(!signUp);
  };
  return (
    <Main>
      <LogInImg src="logo/Vector.svg" alt="" onClick={()=> {props.setShowLogo(false)}}/>
      <MainContainer onClick={toggleUignUp}>
        <LegendsetStyled className="signup">Sign in</LegendsetStyled>
        <SignUPDiv>
          <InputStyle
            id="standard-email-input"
            label="Email address"
            type="email"
            autoComplete="current-email"
            variant="standard"
          />

          <InputStyle
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />

          <ButtonDivStyled>
            <ButtonStyled type="submit">login</ButtonStyled>
          </ButtonDivStyled>
        </SignUPDiv>
        <ForgotPasswordLink>Forgot Password?</ForgotPasswordLink>
        <DividerLabel>or</DividerLabel>

        <SignUpButton>sign in</SignUpButton>
      </MainContainer>
    </Main>
  );
}

export default SignUp;
