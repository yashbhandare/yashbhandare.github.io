import { Box, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';
import VideoCard from "../components/VideoCard";
import { originalVideos } from "../constants/originalVideos";

export default function Originals() {

  const bgColor = useColorModeValue("white", "#00111a");
  const headingColor =  useColorModeValue("#083f3e", "white");

  return (
    <Box p={8} bg={bgColor} minH="100vh">
      {/* Page Heading */}
      <Heading
        textAlign="center"
        mb={8}
        fontSize={{ base: "2xl", md: "4xl" }}
        color={headingColor}
      >
        Yash Bhandare - Original Official Videos
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
      >
        {originalVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
