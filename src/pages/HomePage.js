import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Container, Divider, Heading } from "@chakra-ui/layout";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { appName, baseUrl } from "../constants/constants";
import RestaurantCard from "../components/RestaurantCard";
import AppHeader from "../components/AppHeader";

const HomePage = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${baseUrl}/${appName}/restaurants`, axiosConfig)
      .then((res) => {
        setRestaurantsList(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container h="100vh">
      {/* Topo do App */}
      <AppHeader title={"FutureEats"} />

      {/* Input pesquisa */}
      <InputGroup mb="4">
        <InputLeftElement
          pointerEvents=""
          children={<BiSearch size="24px" color="gray.300" />}
          mt="1"
          mx="1"
        />
        <Input mx="1" size="lg" />
      </InputGroup>

      {/* Menu lateral por categoria */}
      <Box w="full" textAlign="center" background="gray.300" p="2">
        MENU LATERAL
      </Box>

      {/* Lista de restaurantes com componente separado */}
      {restaurantsList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
};

export default HomePage;
