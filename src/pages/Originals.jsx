import { Box, SimpleGrid, Heading, useColorModeValue } from "@chakra-ui/react";
import VideoCard from "../components/VideoCard";

export default function Originals() {
  const bgColor = useColorModeValue("white", "#00111a");
  const headingColor = useColorModeValue("#083f3e", "white");

  return (
    <Box p={8} bg={bgColor} minH="100vh">
      <Heading
        textAlign="center"
        mb={8}
        fontSize={{ base: "2xl", md: "4xl" }}
        color={headingColor}
      >
        Yash Bhandare - Original Official Videos
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {[].map((video, index) => (
          <VideoCard key={`k${{ index }}`} video={video} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
