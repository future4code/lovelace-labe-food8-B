import React, { useEffect, useState } from "react";
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
  Link,
  CircularProgress,
} from "@chakra-ui/react";
import { Link as ReachLink, useHistory } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { appName, baseUrl } from "../constants/constants";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/home");
    }
  }, []);

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLogin = (e) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");

    setIsLoading(true);
    axios
      .post(`${baseUrl}/${appName}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/home");
        setIsLoading(false);
      })
      .catch((err) => console.log(err.response));
  };

  return (
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
          Entrar
        </Heading>
        <Box minW={{ base: "330px", md: "468px" }}>
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl>
                <InputGroup>
                  <Input
                    pr="4.5rem"
                    type="email"
                    placeholder="email@email.com"
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isRequired
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="lg"
                      onClick={handleShowClick}
                      variant="ghost"
                    >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </Button>
                  </InputRightElement>
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
                  Login
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Flex>
      {isLoading ? (
        ""
      ) : (
        <Box mt={2}>
          Não possui cadastro?{" "}
          <Link
            color="#5cb646"
            fontWeight="extrabold"
            as={ReachLink}
            to="/signup"
          >
            Clique aqui
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default LoginPage;
