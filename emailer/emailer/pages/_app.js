import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Box height="100vh">
          <Header />
          <Box mt="60px" height="100%">
            <Component {...pageProps} />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
