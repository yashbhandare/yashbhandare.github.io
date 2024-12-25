import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  IconButton,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaAmazon, FaSpotify} from "react-icons/fa";

export default function Home() {
  const bgColor = useColorModeValue("white", "#00111a");
  const textColor = useColorModeValue("#083f3e", "white");

  return (
    <Box bg={bgColor} p={8}  maxh="100vh" textAlign="center"
    >
      <VStack spacing={6}>
        {/* Profile Picture */}
        <Image
          src="/images/yash-nav.png" // Replace with your image path
          alt="Yash Bhandare"
          // borderRadius="full"
          boxSize="500px"
          // objectFit="cover"
          // border="4px solid"
          // borderColor={useColorModeValue("#5b7a6a", "#5b7a6a")}
          // shadow="lg"
        />

        {/* Name and Description */}
        <Heading as="h1" size="xl" color={textColor}>
          Yash Bhandare
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Music Composer | Arranger
          <br />
          Pianist | Keyboardist
        </Text>
        <Flex gap={4} justify="center">
          <Link href="https://instagram.com/yashgbhandare97" isExternal>
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              size="lg"
              variant="solid"
              bg={bgColor}
              color="pink.400"
              _hover={{
                bg: "pink.700",
                color: "white",
                transform: "scale(1.1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Link>
          <Link href="https://www.youtube.com/@YashBhandare" isExternal>
            <IconButton
              icon={<FaYoutube />}
              aria-label="YouTube"
              size="lg"
              variant="solid"
              bg={bgColor}
              color="red.500"
              _hover={{
                bg: "red.500",
                color: "white",
                transform: "scale(1.1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Link>
          <Link href="https://www.facebook.com/yashgbhandare97" isExternal>
            <IconButton
              icon={<FaFacebook />}
              aria-label="Facebook"
              size="lg"
              variant="solid"
              bg={bgColor}
              color="blue.400"
              _hover={{
                bg: "blue.600",
                color: "white",
                transform: "scale(1.1)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Link>
          <Link href="https://open.spotify.com/artist/2kBeVVi1RkSz4yjOM1dkKc?si=P1ctVaD5SeCYRu4PX08Qyw&nd=1&dlsi=d6ac75a204db47a2" isExternal>
            <IconButton
              icon={<FaSpotify />}
              aria-label="Spotify"
              size="lg"
              variant="solid"
              bg={bgColor}
              color="#1a7a40"
              _hover={{
                bg: "#1a7a40",
                color: "white",
                transform: "scale(1.1)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              }}
              _active={{
                bg: "#1DB954",
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Link>
          <Link href="https://music.amazon.in/artists/B09W66FHZX?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_9LxhNRIFMVTxQSXlbU7hu6eRg" isExternal>
            <IconButton
              icon={<FaAmazon />}
              aria-label="Amazon Music"
              size="lg"
              variant="solid"
              bg="8fbc8f"
              color="orange.500"
              _hover={{
                bg: "orange.700",
                color: "white",
                transform: "scale(1.1)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              }}
              _active={{
                bg: "#232F3E",
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Link>
      </Flex>
      </VStack>
    </Box>
  );
}

