import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const isProductAlreadyInCart = cart.find((productInCart) => {
        if (productInCart.id === product.id) {
          return true;
        } else {
          return false;
        }
      });
  
      if (isProductAlreadyInCart) {
        const newCart = cart.map((productInCart) => {
          if (productInCart.id === product.id) {
            const newProduct = {
              ...productInCart,
              quantity: productInCart.quantity + 1
            };
            return newProduct;
          }
          return productInCart;
        });
        setCart(newCart);
      } else {
        const newProduct = { ...product, quantity: 1 };
        const newCart = [...cart, newProduct];
        setCart(newCart);
      }
    };
  
    const removeFromCart = (product) => {
      let newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          const newProduct = {
            ...productInCart,
            quantity: productInCart.quantity - 1
          };
          return newProduct;
        }
        return productInCart;
      });
  
      newCart = newCart.filter((productInCart) => {
        if (productInCart.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });
  
      setCart(newCart);
    };

        return (
            <GlobalContext.Provider value={{ state, setters, requests }}>
                {props.children}
            </GlobalContext.Provider>
        );
    };

export default GlobalState;
