import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import useAuthStatusOnPage from "../utils/useAuth";
import Payments from "./Payments";
import ReadMeModal from "./ReadMe";

export default function Header() {
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to={auth ? "/surveys" : "/"}>
              <Heading
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
              >
                Emailer
              </Heading>
            </Link>
            <Button ml={2} onClick={onOpen}>
              READ ME
            </Button>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            {setPaymentData ? setPaymentData : null}

            <Button
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
              isLoading={!setLoginData}
            >
              {setLoginData}
            </Button>
          </Stack>
          <Box display={{ base: "block", md: "none" }}>
            <MobileButtons
              setLoginData={setLoginData}
              setPaymentData={setPaymentData}
            />
          </Box>
        </Flex>
      </Box>
      <ReadMeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

function MobileButtons({ setLoginData, setPaymentData }) {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} />
      <MenuList>
        <MenuItem>{setPaymentData ? setPaymentData : null}</MenuItem>
        <MenuItem>
          <Button
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
            isLoading={!setLoginData}
          >
            {setLoginData}
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
