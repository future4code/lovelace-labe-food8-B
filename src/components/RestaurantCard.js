import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Box
      my="4"
      borderRadius="lg"
      display="flex"
      flexDir="column"
      borderWidth="2px"
    >
      <Image h="200px" w="100%" src={restaurant.logoUrl} alignSelf="center" />
      <Box color="gray.500" p="4" flexDir="column">
        <Text fontWeight="bold" color="#5cb646">
          {restaurant.name}
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Text>
            {restaurant.deliveryTime - 10}
            {" - "} {restaurant.deliveryTime} min
          </Text>
          <Text>Frete R${restaurant.shipping},00</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
