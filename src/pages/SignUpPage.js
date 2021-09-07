import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Flex,
  Image,
  Heading,
  Box,
  FormControl,
  InputGroup,
  Input,
  Stack,
  InputRightElement,
  Button,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignUpPage = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não são compatíveis");
    } else {
      const body = {
        name: name,
        email: email,
        cpf: cpf,
        password: password,
      };

      setName("");
      setEmail("");
      setCpf("");
      setPassword("");
      setConfirmPassword("");

      console.log(body);

      // FALTA INTEGRAÇÃO COM API
    }
  };

  return (
    <>
      <Flex flexDir="column" alignItems="flex-start">
        <IconButton
          colorScheme="whatsapp"
          isRound
          py={5}
          size="lg"
          variant="ghost"
          aria-label="Search database"
          icon={<AiOutlineArrowLeft />}
          onClick={() => history.goBack()}
        />
      </Flex>

      <Divider mb={-10} />

      <Flex
        flexDir="column"
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Image
            w="105px"
            objectFit="cover"
            src={logo}
            alt="Future Eats"
            mb={6}
          />
          <Heading as="h2" size="md" mb={6}>
            Cadastrar
          </Heading>
          <Box minW={{ base: "330px", md: "468px" }}>
            <form onSubmit={handleSignUp}>
              <Stack spacing={4}>
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type="text"
                      placeholder="Nome Completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isRequired
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isRequired
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type="text"
                      placeholder="CPF"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      isRequired
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      isRequired
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirme a Senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      isRequired
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  background="#5cb646"
                  width="full"
                >
                  Cadastrar
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpPage;
