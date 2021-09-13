import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

const ProductCard = ({ product, buttonIsSelected, placeOrder }) => {
  return (
    <Flex my="8px" borderRadius="8px" borderWidth="1px" h="120px">
      <Image
        borderTopLeftRadius="8px"
        borderBottomLeftRadius="8px"
        src={product.photoUrl}
        w="35%"
      />
      <Flex
        pt="2"
        pl="2"
        w="full"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text fontWeight="bold" color="#5cb646">
          {product.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {product.description}
        </Text>

        <Flex alignItems="center">
          <Text>R${product.price.toFixed(2)}</Text>

          {buttonIsSelected ? (
            <Button
              borderTopRightRadius="0px"
              borderBottomLeftRadius="0px"
              border="1px solid #5cb646"
              ml="auto"
              w="90px"
              fontSize="sm"
              fontWeight="normal"
              color="#5cb646"
              background="transparent"
              py="8px"
              onClick={placeOrder}
            >
              adicionar
            </Button>
          ) : (
            <Button
              borderTopRightRadius="0px"
              borderBottomLeftRadius="0px"
              border="1px solid #e02020"
              ml="auto"
              w="90px"
              fontSize="sm"
              fontWeight="normal"
              color="#e02020"
              background="transparent"
              py="8px"
              onClick={placeOrder}
            >
              remover
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
