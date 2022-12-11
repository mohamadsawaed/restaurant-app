import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import SignUp from "../../components/signUp/SignUp";
import Hamburger from "../../components/hamburger/Hamburger";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Cart from "../cart/Cart";

import {
  MainContainer,
  HambrgrDiv,
  HambrgrImg,
  AboutrDiv,
  AboutImg,
  NavBarStyle,
  SearchImg,
  LogInImg,
  CardImg,
  DivList,
  SearchText,
} from "./HeaderStyle";
function Header() {
  console.log("aaa");
  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [searchLogo, setSearchLogo] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  function AllRestaurantPage() {
    navigate("/Restaurants");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainContainer>
      <>
        <HambrgrDiv>
          <HambrgrImg src="logo/HAMBUR.svg" onClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            style={{ height: "376px" }}
            BackdropProps={{ style: { backgroundColor: "transparent" } }}
            scroll="body"
            fullScreen={true}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <Hamburger closeHeader={handleClose} />
          </Dialog>
        </HambrgrDiv>
        <AboutrDiv>
          <AboutImg src="logo/about.svg" alt="" onClick={AllRestaurantPage} />
        </AboutrDiv>
        <NavBarStyle>
          <LogInImg src="logo/logIn.svg" onClick={() => {
              setShowLogo(true);
            }} />
          <Dialog
            open={showLogo}
            onClose={() => {
              setShowLogo(false);
            }}
            style={{ height: "fit-content" }}
            BackdropProps={{ style: { backgroundColor: "transparent" } }}
            scroll="body"
            fullScreen={true}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <SignUp setShowLogo={setShowLogo}/>
          </Dialog>
          <SearchImg src="logo/search.svg" onClick={()=>{setSearchLogo(true)}} />
          <Dialog
            open={searchLogo}
            onClose={()=>{setSearchLogo(false)}}
            style={{ height: "376px" }}
            BackdropProps={{ style: { backgroundColor: "transparent" } }}
            scroll="body"
            fullScreen={true}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <SearchHeader setSearchLogo={setSearchLogo}/>
          </Dialog>
          <CardImg src="logo/cart.svg" onClick={() => {
              setShowCart(true);
            }} />
          <Dialog
            open={showCart}
            onClose={() => {
              setShowCart(false);
            }}
            style={{ height: "280px", marginTop: "62px" }}
            BackdropProps={{ style: { backgroundColor: "transparent" } }}
            scroll="body"
            fullScreen={true}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <Cart />
          </Dialog>
        </NavBarStyle>
      </>
    </MainContainer>
  );
}
export default Header;
