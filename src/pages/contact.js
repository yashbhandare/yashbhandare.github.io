import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box p={8}>
      <Heading textAlign="center" mb={8}>Contact Me</Heading>
      <Box maxW="600px" mx="auto">
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your Name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="teal" w="100%">Send Message</Button>
      </Box>
    </Box>
  );
}
