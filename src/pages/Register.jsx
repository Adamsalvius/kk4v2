import React, { useState } from "react";
import { useRecoilState } from "recoil";
import authState from "../stores/auths/atom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  InputGroup,
} from "@chakra-ui/react";


function Register() {
  const [auth, setAuth] = useRecoilState(authState);

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    
    address: {
      city: "Silverdalen",
      street: "ingelbrekt",
      number: "32",
      zipcode: "2",
    },
    phone: "0733281992",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post("https://k4backend.osuka.dev/users", user).then((response) => {
      axios
        .post("https://k4backend.osuka.dev/auth/login", {
          username: response.data.username,
          password: response.data.password,
        })
        .then((response) => {
          axios
            .get(`https://k4backend.osuka.dev/users/${response.data.userId}`)
            .then((userData) => {
             
              setAuth({
                user: userData.data,
                token: response.data.token,
              });
              if (auth.user.role === "user") {
              navigate("/Profile");}
             
              
            });
        });
    });
  };

  return (
    <>
    <Helmet>
    <title>Register</title>
</Helmet>
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.200", "gray.500")}
    >
      <Stack  mx={"auto"} maxW={"lg"} py={10} px={4}>
        <Stack align={"center"}>
          <Heading fontSize={"2rem"} textAlign={"center"}>
            Register
          </Heading>
        </Stack>
        <Box
       
           bg={ "white"} 
       p={9} 
        >
          <Stack spacing={8}>
            <form onSubmit={(e) => e.preventDefault()}>
              
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
           
              <HStack>
                <Box>
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <InputGroup>
                      <Input
                        type="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First name"
                      value={user.name.firstname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          name: { ...user.name, firstname: e.target.value },
                        })
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Surname</FormLabel>

                    <Input
                      type="text"
                      placeholder="Surname"
                      value={user.name.lastname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          name: { ...user.name, lastname: e.target.value },
                        })
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
        

              <Stack spacing={8} pt={2}>
                <Button
                  size="lg"
                  bg={"green.500"}
                  color={"white"}
                  onClick={handleSubmit}
                >
                  Register

                </Button>
              </Stack>
              <Stack pt={6} bg={"gray.50"} rounded={"md"}>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}

export default Register;
