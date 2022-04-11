import React from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
  Spacer,

} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";



function Navbar() {
  return (

    <Box>
     
      <Stack as="nav" direction="row" align="center">
        <Text
          as={Link}
          to="/"
          alt="logo"
          color="#000000"
          textAlign={"center"}
          /* fontSize="3rem" */
          /* marginRight="4" */
        >
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://www.shareicon.net/data/128x128/2016/02/15/719466_animal_512x512.png"
            alt="Crow"
          />
        </Text>
        
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    {}
  </MenuButton>
  
  <MenuList>
    <MenuItem><Link to="/">Home</Link></MenuItem>
    <MenuItem> <Link to="/products">Products</Link></MenuItem>
    <MenuItem><Link to="/login">Login</Link></MenuItem>
    <MenuItem><Link to="/register">Register</Link></MenuItem>
    <MenuItem><Link to="/profile">Profile</Link></MenuItem>
    {/* <MenuItem><Link to="/admin">Admin</Link></MenuItem> */}
  
  </MenuList>
</Menu>
  <Spacer />  

     
        <Link flex={"end"} to="/cart" ><Image mr={"2"} boxSize={"50"}src="https://cdn.iconscout.com/icon/free/png-256/cart-389-458456.png"></Image></Link>
      </Stack>

    </Box>
   
  );
}

export default Navbar;
