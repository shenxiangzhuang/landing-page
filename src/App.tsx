import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ogimage from "./assets/ogimage.png";
import { useEffect } from "react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);
  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Navbar />
          <CallToAction />
        </Box>
      </ChakraProvider>
    </>
  );
};
