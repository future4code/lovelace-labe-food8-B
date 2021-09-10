
import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Container, Divider, Heading } from "@chakra-ui/layout";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { appName, baseUrl } from "../constants/constants";
import RestaurantCard from "../components/RestaurantCard";
import AppHeader from "../components/AppHeader";
import useProtectedPage from "../hooks/useProtectedPage";

const HomePage = () => {

  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    getRestaurants();
  }, []);
  useEffect(() => {
    setFilteredRestaurants(restaurantsList);
  })
  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = restaurantsList.filter((value) => {
      return value.name.toLowerCase().includes(searchWord)
    })
    setFilteredRestaurants(newFilter)
  };

  const categoryArray = restaurantsList.map((item) => {
    return item.category
  });
  const categoryFiltered = categoryArray.filter((a, b) => categoryArray.indexOf(a) === b)

  console.log(categoryFiltered);


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
        <Input mx="1" size="lg"
          onChange={handleFilter}
          placeholder="Procure um restaurante"
        />
      </InputGroup>

      {/* Menu lateral por categoria */}
      <Box w="full" textAlign="center" background="gray.300" p="2">
        MENU LATERAL
      </Box>

      {/* Lista de restaurantes com componente separado */}
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
};

export default HomePage;
