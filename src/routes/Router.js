import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import InitialPage from "../pages/InitialPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";
import ProfilePage from "../pages/ProfilePage";
import AddressPage from "../pages/AddressPage";
import RestaurantPage from "../pages/RestaurantPage.js";
import EditProfilePage from "../pages/EditProfilePage";
import CartPage from "../Pages/CartPage";


export default function Router() {
    return (
        <BrowserRouter>
            
                <Switch>
                    <Route exact path={'/'} >
                        <InitialPage />
                    </Route>

                    <Route exact path='/login'>
                        <LoginPage />
                    </Route>

                    <Route exact path='/signup'>
                        <SignUpPage />
                    </Route>

                    <Route exact path='/feed'>
                        <FeedPage />
                    </Route>

                    <Route exact path='/profile'>
                        <ProfilePage />
                    </Route>

                    <Route exact path='/update_profile'>
                        <EditProfilePage />
                    </Route>

                    <Route exact path='/restaurant/:id'>
                        <RestaurantPage />
                    </Route>

                    <Route exact path='/address_form'>
                        <EditAdressPage />
                    </Route>

                    <Route exact path='/cart'>
                        <CartPage />
                    </Route>

                </Switch>

        </BrowserRouter>
    );
}