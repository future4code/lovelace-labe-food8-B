import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Stack,
  FormControl,
  InputGroup,
  Input,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import GoBackBar from "../components/GoBackBar";

const AdressPage = () => {
  const history = useHistory();

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  }, []);

  const handleAddAdress = (e) => {
    e.preventDefault();

    const body = {
      street: street,
      number: number,
      neighbourhood: district,
      city: city,
      state: state,
      complement: complement,
    };

    setStreet("");
    setNumber("");
    setComplement("");
    setDistrict("");
    setCity("");
    setState("");

    // FALTA INTEGRAÇÃO COM API

    console.log(body);

    history.push("/");
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
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
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
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                background="#5cb646"
                width="full"
              >
                Salvar
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default AdressPage;
