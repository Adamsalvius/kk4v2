import React from "react";
import { authState } from "../stores/auths/atom";
import productState from "../stores/products/atom";
import { userState } from "../stores/users/atom";

import { Box, Image, Text, Grid, Button, Heading, Spacer } from "@chakra-ui/react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Link/* , useNavigate  */} from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import{Helmet} from "react-helmet"


function Admin() {
  /* const navigate = useNavigate(); */
  const products = useRecoilValue(productState);
  const users = useRecoilValue(userState);

  const { user } = useRecoilValue(authState);
  /* const reset = useResetRecoilState(authState); */

  if (!user) {
    return (
      <>
     {/*  <Text align="center">not signed in</Text> */}
      <Box align={"center"}>
      <Helmet>
    <title>error</title>
</Helmet>
        <Text>not signed in</Text>
        
        <Button
          /* size="md" */
          /* marginLeft="50%" */
          
          marginTop="25px"
          bg="gray.400"
          color="white"
         
          as={Link}
          to="/login"
        >
          Login
        </Button>
        
      </Box>
      </>
    );
  }
  if (user.role === "user") {
    
     return (
      <Box>
         <Helmet>
    <title>access denied</title>
</Helmet>
        <Text>not allowed</Text>
      </Box>
    
    ); 
  }
  if (user.role === "admin")
  return (
    <Box >
       <Helmet>
    <title>Admin log</title>
</Helmet>
      <Link to="profile"></Link>
      <Heading align="center"> Admin log </Heading>
      <Menu>
<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
   Users
  </MenuButton>
  <MenuList key={users}>
{users.map((user) => {
        return (
          <>
  
  
    <Text border="1px"key={user.id, user.password}>mail: {user.email}{<br />}
                Username: {user.username}{<br />}
                Password: {user.password}{<br />}
                Name: {user.name.firstname} 
                 {user.name.lastname}{<br />}
                Adress: {user.address.street}
                {user.address.number} {<br />}
                {user.address.city} {<br />}
                {user.address.zipcode}{<br />}
                phone: {user.phone}{<br />}
                </Text>
 

  </>
      );
    })}
  </MenuList>
</Menu>
     {/* gör samma grej med products */}
      {products.map((product) => {
        return (
          <Grid margin={4} >
            <Box border="1px" borderColor="gray.300" align={"center"} key={product.id} to={`/product/${product.id}`}>
              <Image width="5rem" src={product.image} />
              <Text key={product.title}>{product.title}</Text>
              <Text >{product.category}</Text>
              <Text >rating {product.rating.rate}</Text>
              <Text >$ {product.price}</Text>
            </Box>
          </Grid>
        );
      })}

{/* <Menu>
<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList key={users}>
{users.map((user) => {
        return (
          <>
  
  
    <Text key={user.id}>mail: {user.email}{<br />}
                Username: {user.username}{<br />}
                Password: {user.password}{<br />}
                Name: {user.name.firstname} 
                {user.name.lastname}{<br />}
                Adress: {user.address.street}
                {user.address.number} {<br />}
                {user.address.city} {<br />}
                {user.address.zipcode}{<br />}
                phone: {user.phone}{<br />}
                ----</Text>
 

  </>
      );
    })}
  </MenuList>
</Menu> */}
      {/* {users.map((user) => {
        return (
          <Box key={user.id}>
            <Grid margin={4}border='1px' borderColor='gray.100' >
              <Box key={users} align={"center"}>

                <Text key={user.email}>{user.email}</Text>
                <Text key={user.username, user.id}>{user.username}</Text>
                <Text key={user.password}>{user.password}</Text>
                <Text key={user.name.firstname}>{user.name.firstname}</Text>
                <Text key={user.name.lastname}>{user.name.lastname}</Text>
                <Text key={user.address.city}>{user.address.city}</Text>
                <Text key={user.address.street}>{user.address.street}</Text>
                <Text key={user.address.zipcode}>{user.address.zipcode}</Text>
                <Text key={user.address.number}>{user.address.number}</Text>
                <Text key={user.phone}>{user.phone}</Text>
              </Box>
            </Grid>
          </Box>
        );
      })} */}
    </Box>
  );
}

export default Admin;
