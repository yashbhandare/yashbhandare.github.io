import {
  Box,
  Flex,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation(); // React Router's replacement for useRouter()

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Music", to: "/music" },
    { label: "Piano", to: "/piano" },
    { label: "Gallery", to: "/gallery" },
    { label: "Upcoming", to: "/upcoming" },
    { label: "Contact", to: "/contact" },
  ];

  const bgColor = useColorModeValue("#04475c", "#04475c"); // Background
  const textColor = useColorModeValue("white", "#EDF2F7"); // Text
  const hoverColor = useColorModeValue("black", "#63B3ED"); // Hover
  const activeColor = useColorModeValue("#5984a3", "#3182CE"); // Active/Selected

  return (
    <Box
      bg={bgColor}
      px={4}
      color={textColor}
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to} // Use "to" instead of "href"
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  backgroundColor:
                    location.pathname === link.to ? activeColor : bgColor,
                  fontWeight: location.pathname === link.to ? "bold" : "normal",
                  color: textColor,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button onClick={toggleColorMode} variant="ghost" color="white">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
