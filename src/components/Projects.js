import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Link,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";

export default function Projects({ color }) {
  // Hardcoded project data
  const projects = [
    {
      name: "Heart Rate Monitor",
      description:
        "Heart Rate Monitor is an embedded solution that measures and displays your heart rate in real-time. Using a fingertip pulse sensor and a STM32L476RG, it filters the sensor’s analog signal to detect each heartbeat and then calculates Beats Per Minute.",
      image: "../assets/pulse.png",
      buttons: [
        { text: "Demo", href: "https://youtu.be/Fxyp6cF3QS8?si=9l1AipAfyFJGjkuH" },
        { text: "GitHub", href: "https://github.com/ryand4/Heart-Rate-Monitor" },
      ],
      badges: [
        { text: "Embedded", colorScheme: "green" },
        { text: "C", colorScheme: "yellow" },
        { text: "STM32", colorScheme: "blue" },
        { text: "ADC", colorScheme: "purple" },
        { text: "UART", colorScheme: "purple" },
        { text: "RNG", colorScheme: "purple" },
      ],
    },
    {
      name: "StockSensei",
      description:
        "StockSensei is a web-based stock analysis platform designed to assist traders in making informed decisions. The app features tools like a stock price predictor using machine learning and a technical analysis tool for comparing moving averages.",
      image: "../assets/project1.png",
      buttons: [
        { text: "Demo", href: "https://youtu.be/rCgQ7Lbl8KU?si=esW3uXybxWIdj7Dw" },
        { text: "GitHub", href: "https://github.com/ryand4/stock_option_sim" },
      ],
      badges: [
        { text: "React", colorScheme: "blue" },
        { text: "JS", colorScheme: "yellow" },
        { text: "Python", colorScheme: "green" },
        { text: "Flask", colorScheme: "orange" },
        { text: "Yahoo Finance API", colorScheme: "purple" },
        { text: "Azure", colorScheme: "blue" },
      ],
    },
    {
      name: "Automated Data Collection and Monitoring System",
      description:
        "As the tech lead for a university club project, I led the development of an automated data collection and monitoring system for industrial machines. The system utilized Arduino microcontrollers to record machine status codes and unit production counts, and Python Flask to send this data to a MySQL database for analysis. The solution employed RFID tags to capture real-time data, ensuring accurate monitoring of machine performance.",
      image: "../assets/project2.png",
      buttons: [
        { text: "Demo", href: "https://youtube.com/shorts/YfKwL4YLFvg?si=TVvkIBFP7z1xgk38" },
      ],
      badges: [
        { text: "Arduino", colorScheme: "blue" },
        { text: "C++", colorScheme: "red" },
        { text: "Python", colorScheme: "green" },
        { text: "Flask", colorScheme: "yellow" },
        { text: "MySQL", colorScheme: "orange" },
        { text: "RFID", colorScheme: "purple" },
        { text: "LCD Display", colorScheme: "teal" },
        { text: "API", colorScheme: "red" },
      ],
    },
  ];

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          {/* Display hardcoded projects */}
          <Stack px={4} spacing={4}>
            {projects.map((project, idx) => (
              <Fade bottom key={`${project.name}-${idx}`}>
                <Card
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} alt={project.name} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <Link key={button.text} href={button.href} isExternal>
                            <Button colorScheme={color}>
                              {button.text}
                            </Button>
                          </Link>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
