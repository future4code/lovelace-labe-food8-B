import { Divider, Heading } from "@chakra-ui/layout";
import React from "react";

const AppHeader = ({ title }) => {
  return (
    <>
      <Heading as="h1" fontSize="lg" textAlign="center" p="4">
        {title}
      </Heading>
      <Divider mb="2" />
    </>
  );
};

export default AppHeader;
