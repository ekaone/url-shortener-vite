import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
