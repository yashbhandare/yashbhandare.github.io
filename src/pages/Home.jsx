import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
  VStack,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaAmazon,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../constants/links";

export default function Home() {
  const bgColor = useColorModeValue("white", "#00111a");
  const textColor = useColorModeValue("#083f3e", "white");

  const rightSection = () => (
    <VStack>
      <Image
        src="/images/yash-nav.png"
        alt="Yash Bhandare"
        boxSize={{ base: "220px", sm: "280px", md: "360px", lg: "420px" }}
        objectFit="cover"
      />
    </VStack>
  );

  const infoSection = () => (
    <VStack
      spacing={{ base: 3, md: 4 }}
      align={{ base: "center", md: "center" }}
    >
      <Heading
        as="h1"
        size={{ base: "lg", md: "xl" }}
        color={textColor}
        textAlign="center"
      >
        Yash Bhandare
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={textColor}
        textAlign="center"
      >
        Composer | Singer | Arranger
        <br />
        Piano | Keyboard
      </Text>
      <Flex gap={{ base: 2, md: 4 }} justify="center" wrap="wrap">
        <Link to={INSTAGRAM_LINK} isExternal>
          <IconButton
            icon={<FaInstagram />}
            aria-label="Instagram"
            size={{ base: "md", md: "lg" }}
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
        <Link to="https://www.youtube.com/@YashBhandare" isExternal>
          <IconButton
            icon={<FaYoutube />}
            aria-label="YouTube"
            size={{ base: "md", md: "lg" }}
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
        <Link to={FACEBOOK_LINK} isExternal>
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook"
            size={{ base: "md", md: "lg" }}
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
        <Link
          to="https://open.spotify.com/artist/2kBeVVi1RkSz4yjOM1dkKc?si=P1ctVaD5SeCYRu4PX08Qyw&nd=1&dlsi=d6ac75a204db47a2"
          isExternal
        >
          <IconButton
            icon={<FaSpotify />}
            aria-label="Spotify"
            size={{ base: "md", md: "lg" }}
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
        <Link
          to="https://music.amazon.in/artists/B09W66FHZX?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_9LxhNRIFMVTxQSXlbU7hu6eRg"
          isExternal
        >
          <IconButton
            icon={<FaAmazon />}
            aria-label="Amazon Music"
            size={{ base: "md", md: "lg" }}
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
  );

  return (
    <Box
      bg={bgColor}
      p={{ base: 4, md: 8 }}
      minH={{ base: "auto", md: "86vh" }}
      textAlign="center"
    >
      <VStack spacing={{ base: 6, md: 6 }} height="100%">
        <Flex
          justifyContent="space-around"
          width="100%"
          alignItems="center"
          height="100%"
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 4 }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Yash Bhandare"
            boxSize={{ base: "180px", sm: "240px", md: "320px", lg: "400px" }}
            objectFit="cover"
          />
          {infoSection()}
          {rightSection()}
        </Flex>
      </VStack>
    </Box>
  );
}
