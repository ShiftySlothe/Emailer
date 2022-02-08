import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SurveyCard({ survey }) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {survey.title}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {new Date(survey.dateSent).toLocaleDateString()}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {survey.body}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.200"}
            _focus={{
              bg: "red.300",
            }}
            _hover={{
              bg: "red.300",
            }}
          >
            No: {survey.no}
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _focus={{
              bg: "green.500",
            }}
            _hover={{
              bg: "green.500",
            }}
          >
            Yes: {survey.yes}
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
