
import React, { useEffect, useState } from "react";
import { Container, Heading, Divider } from "@chakra-ui/react";
import { useParams } from "react-router";
import axios from "axios";
import { appName, baseUrl } from "../constants/constants";
import GoBackBar from "../components/GoBackBar.js";
import RestaurantDetailCard from "../components/RestaurantDetailCard";
import ProductCard from "../components/ProductCard";
import useProtectedPage from "../hooks/useProtectedPage";


const RestaurantPage = () => {
  const params = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState();
  const [buttonIsSelected, setButtonIsSelected] = useState(true);

    useProtectedPage()

  
  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseUrl}/${appName}/restaurants/${params.id}`, axiosConfig)
      .then((res) => {
        setRestaurantDetail(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const placeOrder = () => {
    // LÓGICA ONDE ENTRA O MODAL PARA SELECIONAR A QUANTIDADE DE PRODUTOS E CHAMAR A API PARA ENVIAR O PEDIDO PRO BACKEND.

    setButtonIsSelected(!buttonIsSelected);
  };

  if (restaurantDetail) {
    const categoryArray = restaurantDetail.products.map((product) => {
      return product.category;
    });
    var newCategoryArray = categoryArray.filter(
      (a, b) => categoryArray.indexOf(a) === b
    );
  }

  return (
    <Container>
      <GoBackBar title="Restaurante" />

      {restaurantDetail && (
        <RestaurantDetailCard restaurantDetail={restaurantDetail} />
      )}

      {restaurantDetail &&
        newCategoryArray.map((category) => (
          <>
            <Heading fontSize="18px" mt="4">
              {category}
            </Heading>
            <Divider backgroundColor="#000" my="8px" />

            {restaurantDetail.products
              .filter((product) => {
                return product.category === category;
              })
              .map((product) => {
                return (
                  <ProductCard
                    product={product}
                    buttonIsSelected={buttonIsSelected}
                    placeOrder={placeOrder}
                  />
                );
              })}
          </>
        ))}
    </Container>
  );
};

export default RestaurantPage;
