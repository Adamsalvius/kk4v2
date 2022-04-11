import { useState } from "react";

import authState from "../stores/auths/atom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import {Helmet} from "react-helmet"
import { useRecoilState } from "recoil";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [Auth, setAuth] = useRecoilState(authState);

  const navigate = useNavigate();

  function login(username, password) {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        username: username,
        password: password,
      })

      .then((res) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
          .then((userData) => {
            setAuth({
              user: userData.data,
              token: res.data.token,
            });
            
            navigate("/profile");
          
          });
      });
  }

  return (
    <>
      <Helmet>
    <title>Login</title>
</Helmet>
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.600")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"md"} py={13} px={9}>
        <Stack align={"center"}>
          <Text> Login 

          </Text>
        </Stack>
        <Box
          rounded={"md"}
          bg={useColorModeValue("white", "gray.700")}
        
          p={8}
        >
          <Stack spacing={4}>
            <div onSubmit={(e) => e.preventDefault()}>
              <FormControl id="usename">
                <FormLabel>
                  Username
                </FormLabel>

                <Input
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
               <FormControl id="password"> 
                <FormLabel>Password</FormLabel>

                <Input
                  type="password" placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
               </FormControl> 
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "row", sm: "column" }}
                  align={"start"}
                  justify={"space-between"}
                >
                 
                </Stack>

                <Button
                  bg={"gray.400"}
                  color={"white"}
                 
                
                  onClick={() => login(username, password)}
                >
                  Login
                </Button>
                
              </Stack>
            
            </div>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}

export default Login;
