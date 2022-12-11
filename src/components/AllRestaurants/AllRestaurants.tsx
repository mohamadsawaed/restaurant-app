import React from "react";
import { useNavigate } from "react-router-dom";

function AllRestaurants() {
  const navigate = useNavigate();

  function AllRestaurantPage() {
    navigate("/Restaurants");
    console.log("1111");
  }
  return (
    <div onClick={AllRestaurantPage}>
      All restaurant
      <img src={"logo/arrow.svg"} alt=""  />
    </div>
  );
}
export default AllRestaurants;
