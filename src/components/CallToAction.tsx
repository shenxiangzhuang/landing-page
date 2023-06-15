import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// @ts-ignore
// import { Terminal } from "react-window-ui";
import { FaBook, FaDiscord, FaRocket } from "react-icons/fa";
const demo = require("../assets/demo.mp4");

export default function CallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
        style={{ paddingTop: "0 !important" }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Sweep:{" "}
          <Text as={"span"} color={"purple.400"}>
            <del>Develop</del>
            <ArrowForwardIcon /> Review Code
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Spend time reviewing code generated by AI, not writing it
        </Text>
        <Stack spacing={6} direction={{ base: "column", md: "row" }} mb={{ base: "2rem !important", md: "0" }}>
          <Button
            rounded={"full"}
            color="white"
            px={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://github.com/apps/sweep-ai")}
          >
            <FaRocket />&nbsp;&nbsp;Install Sweep
          </Button>
          <Button
            rounded={"full"}
            color="white"
            px={6}
            colorScheme={"grey"}
            bg={"#7289da"}
            _hover={{ bg: "#5b6eab" }}
            onClick={() => window.open("https://discord.gg/j8XxQmpHEF")}
          >
            <FaDiscord />&nbsp;&nbsp;Join Discord
          </Button>
          <Button
            rounded={"full"}
            color="white"
            px={6}
            colorScheme={"grey"}
            bg={"grey"}
            display={{ base: "none", md: "inline-flex" }}
            _hover={{ bg: "#5c5c5c" }}
            onClick={() => window.open("https://docs.sweep.dev/start")}
          >
            <FaBook />&nbsp;&nbsp;Read Docs
          </Button>
        </Stack>

        <Flex w={"full"}>
          {/* boxShadow="0 0 80px #444" */}
          <Container width="100vw" boxShadow="0 0 80px #444" p={0} maxWidth="full">
            <video src={demo} autoPlay muted loop>
              Your browser does not support the video tag.
            </video>
          </Container>
        </Flex>
      </Stack>
    </Container>
  );
}
