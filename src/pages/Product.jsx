import React from "react";
import { useParams } from "react-router-dom";
import useCart from "../Cartago/useCart";
import { useRecoilValue } from "recoil";
import {Helmet} from "react-helmet"
import productsState from "../stores/products/atom";
import Singleproduct from "../components/Singleproduct";
import { Box } from "@chakra-ui/react";

function Product() {
  const cart = useCart();
  const { productId } = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find(
    (product) => product.id.toString() === productId
  );

  return (
    <Box marginBottom={"2em"}>
      <Helmet>
    <title>Product</title>
</Helmet>
      <div>
      
     
          <Singleproduct
            key={product.id}
            product={product}
            onClick={() => cart.addItem(product.id)}
          />
       
      </div>
    </Box>
  );
  /*    {!product ? (
          "error, the item is sold out"
        ) : (
          <Singleproduct
            key={product.id}
            product={product}
            onClick={() => cart.addItem(product.id)}
          />
        )} */
}

export default Product;
