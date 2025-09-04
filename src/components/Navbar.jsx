import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation(); // React Router's replacement for useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Music", to: "/music" },
    { label: "Piano", to: "/piano" },
    { label: "Gallery", to: "/gallery" },
    { label: "Latest", to: "/latest" },
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
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        minH="8vh"
      >
        {/* Left: Logo */}
        <Link
          key="/"
          to="/"
          style={{
            padding: "4px 8px",
            borderRadius: "5px",
            color: textColor,
            textDecoration: "none",
          }}
        >
          <Image
            src="/images/Logo Horizontal.png"
            alt="Yash Bhandare"
            height={{ base: "44px", sm: "56px", md: "72px" }}
            padding="4px"
          />
        </Link>

        {/* Desktop nav */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Flex marginLeft="16px">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  padding: "8px 20px",
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
          </Flex>
        </HStack>

        {/* Right: Controls */}
        <HStack spacing={2}>
          <Button onClick={toggleColorMode} variant="ghost" color="white">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {/* Mobile menu button */}
          <IconButton
            aria-label={isOpen ? "Close menu" : "Open menu"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="white"
          />
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={bgColor} color={textColor}>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={2}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  style={{
                    padding: "12px 8px",
                    borderRadius: "6px",
                    backgroundColor:
                      location.pathname === link.to ? activeColor : bgColor,
                    fontWeight:
                      location.pathname === link.to ? "bold" : "normal",
                    color: textColor,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
