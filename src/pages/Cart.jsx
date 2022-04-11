import React from "react";
import useCart from "../Cartago/useCart";
import productsState from "../stores/products/atom";
import { useRecoilValue } from "recoil";
import {
  Container,
  Grid,
  Text,
  Box,
  Image,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import{Helmet} from "react-helmet"

function Cart() {
  const cart = useCart();
  const products = useRecoilValue(productsState);

  function getTotal() {
    return cart.items.reduce((acc, current) => {
      const product = products.find((p) => p.id === current.id);
      return acc + product.price * current.quantity;
    }, 0);
  }

  function getProduct(item) {
    const product = products.find((p) => p.id === item.id);
    const quantity = item.quantity;

    return (
      <div key={item.id}>
         <Helmet>
    <title>Cart</title>
</Helmet>
        <Container padding={4}>
          <Stack direction={["column", "row"]} spacing="1em">
            <HStack spacing="8">
              <Box key={product.id} justifyItems="center" alignItems="center">
                <Image
                  objectFit="contain"
                 
                  height="2rem"
                  width="2rem"
                  src={product.image}
                  alt={product.title}
                />
              </Box>
              <Text textAlign="center">{product.title}</Text>
              <Text textAlign="center">- $ {product.price}</Text>
            </HStack>
          </Stack>
          <Stack display="flex" justifyContent="center">
            <HStack spacing="14px" marginTop="10px">
              <Button
                bg="gray.400"
                color="white"
                onClick={() =>
                  cart.setItemQuantity(product.id, item.quantity - 1)
                }
              >
                -
              </Button>
              <Text>{quantity}</Text>
              <Button
                bg="gray.400"
                color="white"
                onClick={() =>
                  cart.setItemQuantity(product.id, item.quantity + 1)
                }
              >
                +
              </Button>
              <Button
                size="sm"
                bg="gray.400"
                color="white"
                marginLeft="50"
                align={"right"}
                onClick={() => cart.setItemQuantity(item.id, 0)}
              >
                Remove from cart
              </Button>
            </HStack>
          </Stack>
        </Container>
      </div>
    );
  }

  return (
    <Box>
      <Text fontSize="25px" textAlign="center" fontWeight="bold">
        Your Cart
      </Text>
      {cart.items.map(getProduct)}
      <Grid textAlign="center"></Grid>
      <Text marginRight={20} textAlign="right">Total $ {getTotal().toFixed(2)}</Text>
      <Container>
      
      </Container>
    </Box>
  );
}

export default Cart;
