import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";

const RestaurantPage = () => {
  useProtectedPage()
  return <div>RestaurantPage</div>;
};

export default RestaurantPage;
