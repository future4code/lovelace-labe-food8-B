import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const App =() => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
