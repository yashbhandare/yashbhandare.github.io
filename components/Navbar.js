import {Box, Flex, HStack, Image, Link, Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Music", href: "/music" },
    { label: "Originals", href: "/originals" },
    { label: "Piano", href: "/piano" },
    { label: "Gallery", href: "/gallery" },
    { label: "Upcoming", href: "/upcoming" },
    { label: "Contact", href: "/contact" },
  ];

  const bgColor = useColorModeValue("#04475c", "#04475c");  // Background
  const textColor = useColorModeValue("white", "#EDF2F7");  // Text
  const hoverColor = useColorModeValue("black", "#63B3ED");  // Hover
  const activeColor = useColorModeValue("#5984a3", "#3182CE");  // Active/Selected

  return (
    <Box
      bg={bgColor} px={4} color={textColor}
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                px={2}
                py={1}
                rounded="md"
                bg={router.pathname === link.href ? activeColor : bgColor}
                _hover={hoverColor}
                fontWeight={router.pathname === link.href ? "bold" : "normal"}
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
