import React from "react";
import { SimpleGrid, Box, Text, Center } from "@chakra-ui/react";
import { Url, Result } from "./components";

function Home() {
  return (
    <>
      <SimpleGrid columns={[1, null, 2]}>
        <Box as={Center} bg="brandDark.100" height="100vh">
          <Url />
        </Box>
        <Box as={Center} bg="brandDark.200" height="100vh">
          <Result />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Home;
