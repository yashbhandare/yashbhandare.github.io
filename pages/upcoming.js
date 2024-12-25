import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const upcomingEvents = [
  {
    title: "New Single Launch",
    description: "Jaane Tamanna",
    image: "/images/Jaane Tamanna Thumbnail.jpg",
  },
  {
    title: "New Single Launch",
    description: "Jaane Tamanna",
    image: "/images/Jaane Tamanna card.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768, // Tablet and smaller devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Desktop
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Upcoming() {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const cardText = useColorModeValue("black", "white");

  return (
    <Box p={8}>
      <Heading textAlign="center" mb={8}>
        Upcoming Events
      </Heading>

      <Slider {...sliderSettings}>
        {upcomingEvents.map((event, index) => (
          <Box
            key={index}
            bg={cardBg}
            borderRadius="lg"
            p={6}
            textAlign="center"
            boxShadow="lg"
          >
            <VStack spacing={4}>
              <Image
                src={event.image}
                alt={`Event: ${event.title}`}
                borderRadius="lg"
                maxH="400px"
                objectFit="cover"
                fallbackSrc="/images/placeholder.jpg"
              />
              <Heading size="md" color={cardText}>
                {event.title}
              </Heading>
              <Text fontSize="lg" color={cardText}>
                {event.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
