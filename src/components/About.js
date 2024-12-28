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
          I’m a senior-year computer engineering student who loves figuring out how all the pieces of technology fit together, whether that’s digging into low-level hardware details or crafting smooth, intuitive software. At the end of the day, I’m happiest when I’m solving problems and making something work better than before. Outside the lab, you’ll find me exploring California’s local eats, staying active through sports, or tinkering with DIY projects. 
          </Text>
        </Stack>
      </Container>
    </>
  );
}
