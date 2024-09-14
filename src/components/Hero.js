import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  HStack,
  Flex,  // Add Flex for centering the image
  keyframes,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";
import myPhoto from '../photo.png'; // Adjust the path based on where your photo is stored

// Define the typing keyframes
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Define the blinking cursor keyframes
const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: currentColor }
`;

// Define the bouncing keyframes for the icons
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);  // Adjust this value to control the bounce height
  }
`;

export default function Header({ color }) {
  const profile = ProfileArray();
  const { colorMode } = useColorMode();

  // Dynamically set cursor color based on color mode
  const cursorColor = useColorModeValue("black", "white");

  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };

  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };

  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };

  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            
            {/* Typing animation on the role */}
            <Box
              as="span"
              sx={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: `2px solid ${cursorColor}`,  // Dynamic cursor color
                width: "100%",  // Set width to 100% to ensure full display
                animation: `${typing} 3.5s steps(30, end) 1 normal both, ${blink} 0.75s step-end infinite`,  // Typing runs once, blinking continues
                animationFillMode: "forwards",
                color: `${color}.500`,
              }}
            >
              {profile.headerRole}
            </Box>
          </Heading>
          
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>

          {/* Wrap the image in Flex to ensure it's centered */}
          <Flex justify="center" align="center" mb={6} mt={6}>
            <Box
              as="img"
              src={myPhoto} // Use the imported photo
              alt="Ryan's Photo"
              borderRadius="full"
              boxSize="150px"
            />
          </Flex>

          <Text
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "3xl" }}
            color={`${color}.500`}
            mb={1}
          >
            Social Links
          </Text>

          {/* Social Icons with custom colors, hover effects, and bounce animation */}
          <HStack spacing={50} justify="center">
            <Box
              as={FaLinkedin}
              fontSize="48px"
              cursor="pointer"
              color="blue.600"  // Set LinkedIn icon color
              _hover={{ color: "yellow.400" }} // Hover effect
              onClick={linkedin}
              sx={{
                animation: `${bounce} 2s infinite`,  // Bounce animation
              }}
            />
            <Box
              as={FaGithub}
              fontSize="48px"
              cursor="pointer"
              color="gray.700"  // Set GitHub icon color
              _hover={{ color: "yellow.400" }} // Hover effect
              onClick={github}
              sx={{
                animation: `${bounce} 2s infinite`,  // Bounce animation
                animationDelay: "0.2s",  // Add delay for variation
              }}
            />
            <Box
              as={FaEnvelope}
              fontSize="48px"
              cursor="pointer"
              color="red.500"  // Set Email icon color
              _hover={{ color: "yellow.400" }} // Hover effect
              onClick={email}
              sx={{
                animation: `${bounce} 2s infinite`,  // Bounce animation
                animationDelay: "0.4s",  // Add delay for variation
              }}
            />
          </HStack>
        </Stack>
      </Container>
    </>
  );
}
