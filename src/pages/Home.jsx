import React from "react";
import {Helmet} from "react-helmet"

import {
  Stack,
  Image
  
} from "@chakra-ui/react";

function Home() {
  return (
    <>
    <Helmet>
    <title>Home</title>
</Helmet>
    
      <Stack>
        <Image opacity={"0.05"}filter={"grayscale(0.8)"} src="https://i.pinimg.com/originals/a5/e9/f5/a5e9f5ffc6207e54b5817d265309ccc6.gif"></Image>
      </Stack>
      </>
  );
}

export default Home;
