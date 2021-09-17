import React from "react";
import { Flex, IconButton, Heading } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router";

const GoBackBar = ({ title }) => {
  const history = useHistory();
  return (
    <>
      <Flex>
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
        {title ? (
          <>
            <Heading as="h1" fontSize="lg" p="4">
              {title}
            </Heading>
            <div></div>
          </>
        ) : (
          ""
        )}
      </Flex>
    </>
  );
};

export default GoBackBar;
