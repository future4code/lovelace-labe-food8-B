import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const RestaurantDetailCard = ({ restaurantDetail }) => {
  return (
    <Box>
      {restaurantDetail ? (
        <Box my="4" borderRadius="lg" display="flex" flexDir="column">
          <Image
            borderTopRadius="2xl"
            h="200px"
            w="100%"
            src={restaurantDetail.logoUrl}
            alignSelf="center"
          />
          <Box color="gray.500" p="4" flexDir="column">
            <Text fontSize="lg" fontWeight="bold" color="#5cb646">
              {restaurantDetail.name}
            </Text>
            <Text>{restaurantDetail.category}</Text>
            <Box display="flex">
              <Text>
                {restaurantDetail.deliveryTime - 10}
                {" - "} {restaurantDetail.deliveryTime} min
              </Text>
              <Text mx="50px">Frete R${restaurantDetail.shipping},00</Text>
            </Box>
            <Text>{restaurantDetail.address}</Text>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default RestaurantDetailCard;
