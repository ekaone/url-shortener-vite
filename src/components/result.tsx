import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logoShortener from "../assets/link_shortener.svg";

function Result() {
  return (
    <Box>
      <Image
        src={logoShortener}
        boxSize="250px"
        objectFit="cover"
        alt="Logo link shortener"
      />
    </Box>
  );
}

export default Result;
