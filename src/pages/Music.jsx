import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  AspectRatio,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const tracks = [
  {
    title: "Eternal Twilight",
    url: "https://open.spotify.com/embed/track/3mVDpJPUYcuOfFDTRmCr1Q",
  },
  {
    title: "Aandhi Jo Chali Teri Yaadon Ki",
    url: "https://open.spotify.com/embed/track/3b910iHKx0MsbnaYcmr6SY",
  },
  {
    title: "Aankhon Hi Aankhon Se Karti Ho Baatein",
    url: "https://open.spotify.com/embed/track/7L6q0SK4GYNTmmSzlzOZVx",
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

      {/* Responsive Grid */}
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
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={track.url}
                allow="encrypted-media"
                aria-label={`Spotify Track ${track.title}`}
                style={{
                  border: "none",
                  display: "block",
                  margin: 0,
                }}
                title={`Spotify Track ${track.title}`}
              />
            </AspectRatio>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
