import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack direction="row" px={4} align="center">
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          {/* Education Section */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4} px={4}>
            <GridItem>
              <Text color={`${color}.500`} fontWeight={600} fontSize="xl">
                Education
              </Text>
              <Text color={"gray.500"} fontWeight={600} fontSize="lg">
                Cal Poly, San Luis Obispo <br />
                Major: Computer Engineering
              </Text>
            </GridItem>
            <GridItem textAlign="right">
              <Text color={`${color}.500`} fontSize="lg" fontWeight={600}>
                2021 - 2025
              </Text>
            </GridItem>
          </Grid>

          <Divider orientation="horizontal" />

          {/* Condensed About Section */}
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
          I am in my senior year studying computer engineering with a passion for both software development and embedded systems. I enjoy exploring different areas of software, including machine learning, operating systems, and full-stack development, along with automation and embedded systems on the hardware side. Outside of my technical interests, I live in California and spend my free time playing and watching sports, trying local foods, cooking, working on DIY projects, and playing video games.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
