// import Payments from './Payments';
import { Flex, Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import { useUser } from '../lib/hooks';

function Header() {
  const [user, { loading }] = useUser();

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
        <Link href={user ? '/surveys' : '/'}>Emailer</Link>
      </Heading>

      <Button isLoading={loading}>Credits: {user ? user.credits : null}</Button>
      {/* <Button isLoading={loading}><Payments /></Button> */}

      {user ? (
        <Button color="inherit" isLoading={loading}>
          <Link href="/api/auth/logout">Logout</Link>
        </Button>
      ) : (
        <>
          {/* <Link href="api/auth/google/login">Login with Google</Link> */}
          <Button color="inherit" isLoading={loading}>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button color="inherit" isLoading={loading}>
            <Link href="/login">Login</Link>
          </Button>
        </>
      )}
    </Flex>
  );
}

export default Header;
