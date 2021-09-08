import React from "react";
import { Flex, IconButton, Divider } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router";

const GoBackBar = () => {
  const history = useHistory();
  return (
    <>
      <Flex flexDir="column" alignItems="flex-start">
        <IconButton
          colorScheme="whatsapp"
          isRound
          p="5"
          size="lg"
          variant="ghost"
          aria-label="Search database"
          icon={<AiOutlineArrowLeft />}
          onClick={() => history.goBack()}
        />
      </Flex>

      <Divider mb={-10} />
    </>
  );
};

export default GoBackBar;
