import { Flex, Center } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <Center>
      <Flex alignItems="center" width="50vw" flexDirection="column">
        <Heading m={4}>Sign up</Heading>
        <SignupForm />
      </Flex>
    </Center>
  );
}
