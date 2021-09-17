import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Stack,
  FormControl,
  InputGroup,
  Input,
  Button,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import GoBackBar from "../components/GoBackBar";
import axios from "axios";
import { appName, baseUrl } from "../constants/constants";
import useProtectedPage from "../hooks/useProtectedPage";

const AdressPage = () => {
  useProtectedPage()
  const history = useHistory();
  const toast = useToast();

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleAddAdress = (e) => {
    e.preventDefault();

    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    const body = {
      street: street,
      number: number,
      neighbourhood: neighbourhood,
      city: city,
      state: state,
      complement: complement,
    };

    setStreet("");
    setNumber("");
    setComplement("");
    setNeighbourhood("");
    setCity("");
    setState("");

    setIsLoading(true);
    axios
      .put(`${baseUrl}/${appName}/address`, body, axiosConfig)
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        toast({
          title: "O endereço foi cadastrado.",
          status: "success",
          duration: "3000",
          isClosable: true,
        });
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <GoBackBar />
      <Flex
        flexDir="column"
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="md" mb={6}>
          Meu Endereço
        </Heading>
        <Box minW={{ base: "330px", md: "468px" }}>
          <form onSubmit={handleAddAdress}>
            <Stack spacing={4}>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Endereço"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Número"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Complemento"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Bairro"
                    value={neighbourhood}
                    onChange={(e) => setNeighbourhood(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Estado"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              {isLoading ? (
                <CircularProgress
                  isIndeterminate
                  color="green.300"
                  alignSelf="center"
                />
              ) : (
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  background="#5cb646"
                  width="full"
                >
                  Salvar
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default AdressPage;
