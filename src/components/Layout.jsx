import { Link } from "react-router-dom";
import { useColorModeValue, Box, VStack, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const bgColor = useColorModeValue("#04475c", "#04475c"); // Background
  const textColor = useColorModeValue("white", "#EDF2F7");
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8">{children}</main>
      <Box
        as="footer"
        className="bg-gray-900 text-white text-center mt-8 w-full bg-lightgrey"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        px={{ base: 4, md: 8 }}
        py={{ base: 3, md: 4 }}
        width="100%"
      >
        <VStack
          spacing={{ base: 1, md: 2 }}
          align="center"
          maxW="960px"
          mx="auto"
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            lineHeight={{ base: 1.4, md: 1.5 }}
          >
            &copy; 2025 Yash Bhandare Productions.
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
            lineHeight={{ base: 1.4, md: 1.5 }}
            style={{ textIndent: "6px" }}
          >
            All rights reserved.
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
            lineHeight={{ base: 1.4, md: 1.5 }}
            style={{ textIndent: "6px" }}
          >
            Unauthorized use or reproduction is prohibited.
          </Text>
        </VStack>
      </Box>
    </div>
  );
}
