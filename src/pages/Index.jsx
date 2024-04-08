import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Grid, GridItem, Container } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box backgroundImage="https://images.unsplash.com/photo-1599462616558-2b75fd26a283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTcxMjU4OTE4Nnww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            Capture Your Special Day
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Beautiful, timeless wedding photography by John Doe
          </Text>
          <Button colorScheme="teal" size="lg">
            Book Now
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            We are passionate about capturing the love and joy of your special day. With years of experience, we create stunning, timeless images that you'll cherish forever.
          </Text>
          <Image src="https://images.unsplash.com/photo-1625069767291-11cfb51ca538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyNTg5MTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Photographer" borderRadius="full" boxSize="200px" mx="auto" />
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Portfolio
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1664606750185-759f4f709ef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjAxfGVufDB8fHx8MTcxMjU4OTE4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Photo 1" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1523264058183-49ea5572cdf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjAyfGVufDB8fHx8MTcxMjU4OTE4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Photo 2" borderRadius="md" />
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1667029837284-292976061fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjAzfGVufDB8fHx8MTcxMjU4OTE4OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Photo 3" borderRadius="md" />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Get In Touch
          </Heading>
          <Stack direction="row" spacing={4}>
            <Button leftIcon={<FaInstagram />} colorScheme="teal" variant="outline">
              Instagram
            </Button>
            <Button leftIcon={<FaFacebook />} colorScheme="teal" variant="outline">
              Facebook
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Email
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
