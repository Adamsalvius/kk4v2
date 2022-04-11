import React from "react";

import { Flex, Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Singleproduct({ product, onClick }) {
  return (
    <Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
       
      >
        <Image marginTop={"20"} width="22%"  src={product.image} alt={product.title} />
        <Box>
        
        <Text paddingTop="3" fontWeight="semibold">
           
             {product.category}
          </Text>
          <Text
            paddingTop="3"
            fontWeight="bold"
            
            textAlign="center"
          >
            {product.title}
          </Text>
          <Text fontStyle={"italic"}>{product.rating.rate} / 5 Rating</Text>
          <Text
            paddingTop="3"
            align={"center"}
           
          >
            Price: $ {product.price}
          </Text>
          <Text
          paddingTop="3"
            maxW="300"
            
            
            
          >
            {product.description}
          </Text>
        
       
          <Box align={"center"}>
          <Button
            onClick={onClick}
            bg="gray.400"
            color="white"
            align={"center"}
          
            marginTop="25"
          >
            Add product
          </Button>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Singleproduct;
