import React from "react";
import { useSelector } from "react-redux";
import useAuthStatusOnPage from "../utils/useAuth";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

function Header() {
  const auth = useSelector((state) => state.auth);
  const setLoginData = useAuthStatusOnPage(
    auth,
    null,
    <a href="/api/logout">Logout</a>,
    <a href="/auth/google">Login with Google</a>
  );
  const setPaymentData = useAuthStatusOnPage(
    auth,
    null,
    <>
      <Button>Credits: {auth ? auth.credits : null}</Button>
      <Payments />
    </>,
    null
  );
  return (
    <Flex
      overflow="hidden"
      bg="red"
      position="fixed"
      top="0"
      width="100vw"
      height="60px"
      p={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>
        <Link to={auth ? "/surveys" : "/"}>Emailer</Link>
      </Heading>
      {setPaymentData ? setPaymentData : null}

      <Button color="inherit" isLoading={!setLoginData}>
        {setLoginData}
      </Button>
    </Flex>
  );
}

export default Header;
