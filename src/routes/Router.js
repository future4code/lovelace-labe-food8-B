import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "../pages/SplashPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import AdressPage from "../pages/AdressPage";
import RestaurantPage from "../pages/RestaurantPage.js";
import EditProfilePage from "../pages/EditProfilePage";
import CartPage from "../pages/CartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <SplashPage />
        </Route>

        <Route exact path={"/home"}>
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/update-profile">
          <EditProfilePage />
        </Route>

        <Route exact path="/restaurant/:id">
          <RestaurantPage />
        </Route>

        <Route exact path="/address-form">
          <AdressPage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}