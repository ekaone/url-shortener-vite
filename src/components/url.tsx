import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "store";
import { FormControl, Input, FormHelperText, Box, Kbd } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getShortId } from "../utils/getShortId";

interface PropsRedirect {
  redirect: string;
}

const loaderVariants = {
  animationOne: {
    y: [0, -5],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const KeyboardReturn = ({ redirect }: PropsRedirect) => (
  <FormHelperText color="white" fontSize="x-large" marginTop="10">
    nice{" "}
    <span role="img" aria-label="Hint">
      👍
    </span>{" "}
    now go to{" "}
    <Link
      to={redirect}
      target="_blank"
      style={{ textDecoration: "underline", color: "#f0e00a" }}
    >
      {redirect}
    </Link>
  </FormHelperText>
);

const Hint = () => (
  <FormHelperText color="white" fontSize="x-large" marginTop="10">
    <motion.div variants={loaderVariants} animate="animationOne">
      url{" "}
      <span role="img" aria-label="Hint">
        👆
      </span>
      , then press <Kbd backgroundColor="gray.700">Return</Kbd> or{" "}
      <Kbd backgroundColor="gray.700">Enter</Kbd>
    </motion.div>
  </FormHelperText>
);

function Url() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState(false);

  const handleKeyUp = async (e: any) => {
    if (e.keyCode === 13) {
      const value = e.target.value;
      const uniqID = getShortId();
      if (value !== "") {
        store.set("shorten_destination", {
          destination: value,
          id: uniqID,
        });
        setUrl(`/go/${uniqID}`);
        setState(true);
      }
    }
  };

  useEffect(() => {
    const urlDestination = store.get("shorten_destination");

    // if (typeof urlDestination === "undefined") {
    //   setState(false);
    // }

    // URL set before
    if (typeof urlDestination !== "undefined") {
      const getIDUrlDestination = store.get("shorten_destination").id;

      setUrl(`/go/${getIDUrlDestination}`);
      setState(true);
    }
  }, []);

  return (
    <Box justifyContent="center">
      <FormControl id="search">
        <Input
          width={["sm", null, "lg"]}
          background="transparent"
          color="brandOrange"
          border={0}
          borderBottom="1px"
          borderRadius="none"
          fontSize="large"
          fontWeight={500}
          autoComplete="off"
          boxShadow="none !important"
          px={3}
          py={2}
          onKeyUp={handleKeyUp}
        />
        {state ? <KeyboardReturn redirect={url} /> : <Hint />}
      </FormControl>
    </Box>
  );
}

export default Url;
