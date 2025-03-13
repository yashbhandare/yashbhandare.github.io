import React from "react";
import { Box, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";

function VideoCard({ video }) {
  const cardBg = useColorModeValue("white", "#00111a");
  const textColor = useColorModeValue("black", "white");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      bg={cardBg}
      borderWidth={1}
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      maxW="320px"
      m={4}
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="372px"
    >
      <Box
        as="a"
        href={`https://www.youtube.com/embed/${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        display="block"
      >
        <Image
          src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
          alt={video.title}
          borderRadius="md"
          w="100%"
          mb={2}
        />
      </Box>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={textColor}
        noOfLines={3}
        mb={3}
      >
        {video.title}
      </Text>
      <Button
        colorScheme="blue"
        variant="solid"
        size="sm"
        width="100%"
        mt="auto"
        onClick={() =>
          window.open(`https://www.youtube.com/embed/${video.id}`, "_blank")
        }
      >
        Watch Video
      </Button>
    </Box>
  );
}

export default VideoCard;
