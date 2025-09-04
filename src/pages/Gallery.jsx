import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Image as ChakraImage,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import randomizeOrder from "../constants/randomizeOrder";

export default function Gallery() {
  const importAll = (r) =>
    r.keys().map((key) => ({
      src: r(key),
      name: key.replace("./", ""),
    }));

  const images = importAll(
    require.context("../../public/images/gallery", false, /\.(png|jpe?g|svg)$/),
  );

  const photos = useMemo(() => randomizeOrder(images), [images]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = useCallback(
    (idx) => {
      setCurrentIndex(idx);
      onOpen();
    },
    [onOpen],
  );

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }, [photos.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handler = (e) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, showNext, showPrev]);

  return (
    <Box
      style={{
        backgroundImage: "url('/images/music-bg-image.webp')",
        backgroundSize: "cover",
      }}
      px={{ base: 4, md: 10 }}
      py={{ base: 6, md: 10 }}
    >
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
        spacing={{ base: 3, md: 4 }}
        alignItems="stretch"
      >
        {photos.map((image, index) => (
          <Box
            key={`k${index + 1}`}
            role="button"
            tabIndex={0}
            onClick={() => openAt(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openAt(index);
            }}
            position="relative"
            overflow="hidden"
            borderRadius="8px"
            cursor="pointer"
            boxShadow="sm"
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            sx={{
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": { transform: "translateY(-2px)", boxShadow: "md" },
              },
            }}
          >
            <ChakraImage
              src={image.src}
              alt={image.name}
              width="100%"
              height="auto"
              loading="lazy"
              draggable={false}
            />
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody p={0}>
            <Flex align="center" justify="center" position="relative">
              <IconButton
                aria-label="Previous"
                icon={<ArrowBackIcon />}
                onClick={showPrev}
                position="absolute"
                left={{ base: 1, md: 2 }}
                top="50%"
                transform="translateY(-50%)"
                variant="ghost"
              />
              <ChakraImage
                src={photos[currentIndex]?.src}
                alt={photos[currentIndex]?.name}
                maxH={{ base: "70vh", md: "80vh" }}
                maxW="100%"
                objectFit="contain"
                mx="auto"
                draggable={false}
              />
              <IconButton
                aria-label="Next"
                icon={<ArrowForwardIcon />}
                onClick={showNext}
                position="absolute"
                right={{ base: 1, md: 2 }}
                top="50%"
                transform="translateY(-50%)"
                variant="ghost"
              />
              <IconButton
                aria-label="Close"
                icon={<CloseIcon />}
                onClick={onClose}
                position="absolute"
                top={{ base: 1, md: 2 }}
                right={{ base: 1, md: 2 }}
                variant="ghost"
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
