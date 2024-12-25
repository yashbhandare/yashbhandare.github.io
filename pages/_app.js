import theme from '../styles/theme';
import Navbar from "../components/Navbar";
import {ChakraProvider} from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
