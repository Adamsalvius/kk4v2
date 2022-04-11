import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

function ProductCard({ product, onClick }) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
    
      border={"1px"}
      borderColor={"gray.100"}
    >
      <Box alignItems={"center"}align={"center"}>
        <Image
          alt={product.title}
          src={product.image}
          marginTop={5}
       
         height="150px"
        
          alignItems={"center"}
        />
        <Text align={"center"}>{product.category}</Text>
        <Text size={"2rem"}>
          {product.title}
        </Text>
        <Text align="center">{product.price}$</Text>
        
        <Stack  alignItems={"center"}  >
        <Box  marginBottom={5}  position={"bottom"}>
          <Button
            size="sm"
            width="6rem"
            onClick={onClick}
            bg="gray.300"
            color="black.400"
            
          >
            Add to Cart
          </Button>
          <Button
            size="sm"
            width="6rem"
            
            onClick={onClick}
            as={Link}
            to={`/products/${product.id}`}
            bg="gray.300"
            color="gray.400"
            marginLeft={"2"} 
          >
            product page
          </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default ProductCard;
