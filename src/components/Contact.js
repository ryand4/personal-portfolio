import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();

  const linkedin = () => {
    window.open(`https://www.linkedin.com/in/ryan-dosanjh-38762363/`, "_blank", "noreferrer,noopener");
  };

  const github = () => {
    window.open(`https://github.com/ryand4`, "_blank", "noreferrer,noopener");
  };

  const email = () => {
    window.open(`mailto:ryanas.dosanjh@gmail.com`, "_blank", "noreferrer,noopener");
  };

  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              Contact me at
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              ryanas.dosanjh@gmail.com
            </Text>
            <Center>
              <HStack pt={4} spacing={6}>
                {/* LinkedIn Icon */}
                <Box
                  as={FaLinkedin}
                  fontSize="48px"  // Adjust the icon size
                  cursor="pointer"
                  color="gray.400"  // Initial color
                  _hover={{ color: "yellow.400" }}  // Hover effect
                  onClick={linkedin}
                />
                
                {/* GitHub Icon */}
                <Box
                  as={FaGithub}
                  fontSize="48px"  // Adjust the icon size
                  cursor="pointer"
                  color="gray.400"  // Initial color
                  _hover={{ color: "yellow.400" }}  // Hover effect
                  onClick={github}
                />
                
                {/* Email Icon */}
                <Box
                  as={FaEnvelope}
                  fontSize="48px"  // Adjust the icon size
                  cursor="pointer"
                  color="gray.400"  // Initial color
                  _hover={{ color: "yellow.400" }}  // Hover effect
                  onClick={email}
                />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
