import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Text,
  useColorModeValue,
  Button,
  Flex,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { FaAmazon, FaApple } from "react-icons/fa";

const tracks = [
  {
    title: "Tumse Judi Hai",
    spotifyUrl: "https://open.spotify.com/embed/track/6A9EQUFcSecW6WaWEsIjQu",
    youtubeUrl: "7NXmqM6UJTc",
    description:
      "Tumse Judi Hai Duniya Meri\n" +
      "\n" +
      "Featuring: Kritika & Yash\n" +
      "\n" +
      "Written, Composed & Sung by: Yash Bhandare\n" +
      "\n" +
      "Music Arrangement & Programming: Yash Bhandare\n" +
      "Rhythm: Ruturaj Kore\n" +
      "Recording & Mixing: N V Siddhesh\n" +
      "Mastering: Satyajeet Ranade @ Dotwave Studios, Pune\n" +
      "Videography: Sujay Bhandare, Anish Patade\n" +
      "\n" +
      "Concept: Kritika Patade\n" +
      "Produced by: Yash Bhandare Productions",
  },
  {
    title: "Instavale Pyaar Mein",
    spotifyUrl: "https://open.spotify.com/embed/track/0ehTgSbexYwzSyOoH4g7Qg",
    youtubeUrl: "61qfimx4FIw",
    description:
      "Instavale Pyaar Mein Dil Mera Kho Gaya\n" +
      "\n" +
      "Written, Composed & Sung by Yash Bhandare\n" +
      "\n" +
      "Music Arrangement & Programming: Yash Bhandare\n" +
      "Rhythm Section: Ruturaj Kore\n" +
      "Recording & Mixing: N V Siddhesh, Dotwave Studio\n" +
      "Mastering: Satyajeet Ranade, Dotwave Studio\n" +
      "Produced by Yash Bhandare Productions",
  },
  {
    title: "Jo Apna Tha Mera",
    spotifyUrl: "https://open.spotify.com/embed/track/0QAbWnn8UW46IFE1laQ0nG",
    youtubeUrl: "0i8dZdnUxtE",
    description:
      "Jo Apna Tha Mera\n" +
      "\n" +
      "Written, Composed & Sung by Yash Bhandare\n" +
      "\n" +
      "Music Arrangement & Programming: Yash Bhandare\n" +
      "Recording & Mixing: N V Siddhesh, Dotwave Studio\n" +
      "Mastering: Satyajeet Ranade, Dotwave Studio\n" +
      "Videography: Sujay Bhandare\n" +
      "Produced by Yash Bhandare Productions",
  },
  {
    title: "Chalna Hi Jeevan Hai",
    spotifyUrl: "https://open.spotify.com/embed/track/4umjnSHghqOENYl7xfSozZ",
    youtubeUrl: "SPpG2jQbT7A",
    description:
      "Chalna Hi Jeevan Hai\n" +
      "\n" +
      "Written, Composed & Sung by Yash Bhandare\n" +
      "\n" +
      "Music Arrangement, Programming & Piano: Yash Bhandare\n" +
      "Recording & Mixing: N V Siddhesh, Dotwave Studio\n" +
      "Mastering: Satyajeet Ranade, Dotwave Studio\n" +
      "Videography: Sujay Bhandare\n" +
      "Produced by Yash Bhandare Productions",
  },
  {
    title: "Rainy Stories - A Symphony",
    spotifyUrl: "https://open.spotify.com/embed/track/6PFQshAEiZAJfQTuB9V5JC",
    youtubeUrl: "dSliuPTfY2w",
    description:
      '"Rainy Stories - A symphony" is a journey through the many moods of rain — romance, happiness, innocence, sadness, loneliness, beauty and more — each movement unfolding like a story whispered by the clouds!\n' +
      "\n" +
      "Music Composer, Arranger, Programmer: Yash Bhandare\n" +
      "\n" +
      "Mixing & Mastering: Anand Kurhekar\n" +
      "\n" +
      "Producer: Yash Bhandare Productions",
  },
  {
    title: "Jaane Tamanna",
    spotifyUrl: "https://open.spotify.com/embed/track/2u76EZnnsKTBNAtUpveZMx",
    youtubeUrl: "vANUkJ1E54Y",
    description:
      "Jaane Tamanna Dil Yeh Tanha\n" +
      "\n" +
      "Singer: Nitin Mukesh\n" +
      "Music: Yash Bhandare\n" +
      "Lyrics: Dr Amit Tribhuvan\n" +
      "Arrangement & Programming: Yash Bhandare\n" +
      "Rhythm Arrangement: Ruturaj Kore\n" +
      "Recordist: Anand Dabre, LM Studio\n" +
      "Mixing & Mastering: Anand Kurhekar\n" +
      "Video Editing: Sujay Bhandare\n" +
      "Produced by: Yash Bhandare Productions",
  },
  {
    title: "Eternal Twilight",
    spotifyUrl: "https://open.spotify.com/embed/track/3mVDpJPUYcuOfFDTRmCr1Q",
    youtubeUrl: "M-l4eY8engQ",
    description:
      'Symphony "Eternal Twilight" - Yash Bhandare\n' +
      "\n" +
      "Music: Yash Bhandare\n" +
      "Rhythm: Ruturaj Kore\n" +
      "Mixing & Mastering: Anand Kurhekar\n" +
      "Artwork & Video: Sujay Bhandare\n" +
      "Produced by: Yash Bhandare Productions",
  },
  {
    title: "Aandhi Jo Chali Teri Yaadon Ki",
    spotifyUrl: "https://open.spotify.com/embed/track/3b910iHKx0MsbnaYcmr6SY",
    youtubeUrl: "4WPxGdyQq4k",
    description:
      "Aandhi Jo Chali Teri Yaadon Ki\n" +
      "\n" +
      "Music Director: Yash Bhandare\n" +
      "Lyricist: Dr Amit Tribhuvan\n" +
      "Singer: Ketaki Naik Menon\n" +
      "Music Arrangement: Yash Bhandare\n" +
      "Rhythm: Abhijeet Bhade\n" +
      "Mixed & Mastered by Ajinkya Purandare at Dot Wave Studios\n" +
      "Artwork: Meenakshi Bhandare\n" +
      "Video Editing: Sujay Bhandare\n" +
      "Produced by: Yash Bhandare Productions",
  },
  // {
  //   title: "Aankhon Hi Aankhon Se Karti Ho Baatein",
  //   spotifyUrl: "https://open.spotify.com/embed/track/7L6q0SK4GYNTmmSzlzOZVx",
  //   youtubeUrl: "bVM8NcL8MxA",
  // },
];

export default function Music() {
  const cardBg = useColorModeValue("white", "#00111a");
  const hoverBg = useColorModeValue("#6eb2bf", "#002539");
  const textColor = useColorModeValue("#083f3e", "white");

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Heading textAlign="center" mb={8} color={textColor}>
        Yash Bhandare - Original Sound Tracks
      </Heading>

      <Stack spacing={6}>
        {tracks.map((track, index) => (
          <Box
            key={`track-${index + 1}`}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="md"
            p={6}
            _hover={{
              boxShadow: "lg",
              bg: hoverBg,
              transform: "scale(1.01)",
            }}
            transition="all 0.2s ease-in-out"
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              mb={4}
              color={textColor}
            >
              {track.title}
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              align="stretch"
            >
              {/* Left: YouTube */}
              <Box flex={{ base: "1", md: "2" }}>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`https://www.youtube.com/embed/${track.youtubeUrl}`}
                    title={`YouTube - ${track.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: cardBg,
                    }}
                  />
                </AspectRatio>
              </Box>
              <VStack flex="1" spacing={2} align="stretch" justify="flex-start">
                <AspectRatio ratio={1.5} maxH="80px">
                  <iframe
                    src={track.spotifyUrl}
                    title={`Spotify - ${track.title}`}
                    allow="encrypted-media"
                    style={{
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: cardBg,
                    }}
                  />
                </AspectRatio>
                <Button
                  leftIcon={<FaApple />}
                  colorScheme="red"
                  variant="solid"
                  size="sm"
                  height="40px"
                  as="a"
                  href={track.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Music
                </Button>
                <Button
                  leftIcon={<FaAmazon />}
                  colorScheme="yellow"
                  variant="solid"
                  size="sm"
                  height="40px"
                  as="a"
                  href={track.amazonMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon Music
                </Button>
                {track.description && (
                  <Box mt={2}>
                    {track.description.split("\n").map((line, i) => (
                      <Text
                        fontSize="sm"
                        color={textColor}
                        key={`desc-${i + 1}`}
                      >
                        {line}
                      </Text>
                    ))}
                  </Box>
                )}
              </VStack>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
