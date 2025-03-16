import {
  Heading,
  Icon,
  VStack,
  Container,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { EMAIL, FACEBOOK_LINK, INSTAGRAM_LINK } from "../constants/links";

export default function Contact() {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const cardText = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "#00111a");
  const textColor = useColorModeValue("#083f3e", "white");

  return (
    <VStack
      minH="100vh"
      p={4}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        maxW="sm"
        bg={cardBg}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center"
      >
        <Heading size="lg" mb={4} color={cardText}>
          Reach Out to Us
        </Heading>
        <VStack spacing={4} align="center">
          <Link
            href={FACEBOOK_LINK}
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            // bg={bgColor}
            color="blue.400"
            fontSize="lg"
            _hover={{
              bg: "blue.600",
              color: "white",
              transform: "scale(1.1)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Icon as={FaFacebook} boxSize={6} />
            Facebook
          </Link>
          <Link
            href={INSTAGRAM_LINK}
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            // bg={bgColor}
            color="pink.400"
            fontSize="lg"
            _hover={{
              bg: "pink.700",
              color: "white",
              transform: "scale(1.1)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Icon as={FaInstagram} boxSize={6} />
            Instagram
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            display="flex"
            alignItems="center"
            gap={2}
            color="blue.500"
            fontSize="lg"
            _hover={{ textDecoration: "underline" }}
          >
            <Icon as={FaEnvelope} boxSize={6} />
            {EMAIL}
          </Link>
        </VStack>
      </Container>
    </VStack>
  );
}
