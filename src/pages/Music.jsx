import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  AspectRatio,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const tracks = [
  {
    title: "Tumse Judi Hai",
    spotifyUrl: "https://open.spotify.com/embed/track/6A9EQUFcSecW6WaWEsIjQu",
    youtubeUrl: "7NXmqM6UJTc",
  },
  {
    title: "Jaane Tamanna",
    spotifyUrl: "https://open.spotify.com/embed/track/2u76EZnnsKTBNAtUpveZMx",
    youtubeUrl: "vANUkJ1E54Y",
  },
  {
    title: "Eternal Twilight",
    spotifyUrl: "https://open.spotify.com/embed/track/3mVDpJPUYcuOfFDTRmCr1Q",
    youtubeUrl: "M-l4eY8engQ",
  },
  {
    title: "Aandhi Jo Chali Teri Yaadon Ki",
    spotifyUrl: "https://open.spotify.com/embed/track/3b910iHKx0MsbnaYcmr6SY",
    youtubeUrl: "4WPxGdyQq4k",
  },
  {
    title: "Aankhon Hi Aankhon Se Karti Ho Baatein",
    spotifyUrl: "https://open.spotify.com/embed/track/7L6q0SK4GYNTmmSzlzOZVx",
    youtubeUrl: "bVM8NcL8MxA",
  },
];

export default function Music() {
  const cardBg = useColorModeValue("white", "#00111a");
  const hoverBg = useColorModeValue("#6eb2bf", "#002539");
  const textColor = useColorModeValue("#083f3e", "white");

  return (
    <Box p={8}>
      <Heading textAlign="center" mb={8} color={textColor}>
        Yash Bhandare - Original Sound Tracks
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {tracks.map((track, index) => (
          <Box
            key={`k${{ index }}`}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            textAlign="center"
            bg={cardBg}
            _hover={{ boxShadow: "lg", bg: hoverBg, transform: "scale(1.02)" }}
            transition="all 0.2s ease-in-out"
          >
            <Text fontWeight="bold" p={4} color={textColor}>
              {track.title}
            </Text>
            <AspectRatio
              ratio={16 / 9}
              style={{
                height: "64.7%",
              }}
            >
              <iframe
                src={track.spotifyUrl}
                allow="encrypted-media"
                aria-label={`Spotify Track ${track.title}`}
                style={{
                  border: "none",
                  display: "block",
                  margin: 0,
                  backgroundColor: cardBg,
                  borderRadius: "4%",
                }}
                title={`Spotify Track ${track.title}`}
              />
            </AspectRatio>
            <Button
              colorScheme="blue"
              variant="solid"
              size="sm"
              width="60%"
              mt="auto"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/embed/${track.youtubeUrl}`,
                  "_blank",
                )
              }
              leftIcon={<FaYoutube />}
            >
              Watch Video on YouTube
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
