import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";

export default function Experience({ color }) {
  const experience = ExperienceArray(); // Fetch experiences

  // Define the two categories as options
  const options = [
    { value: "Relevant" },
    { value: "Other" },
  ];

  const [selected, setSelected] = useState("Relevant"); // Default to Relevant

  const handleSelected = (value) => {
    setSelected(value);
  };

  // Check if experiences are loading properly
  if (!experience || experience.length === 0) {
    return <Text>Loading experiences...</Text>; // Safeguard
  }

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  key={option.value}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>

          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => {
                // Make sure exp.tags exist and properly compare to the selected category
                return exp.tags && exp.tags.includes(selected);
              }) // Filter by selected tag (Relevant/Other)
              .map((exp, idx) => (
                <Fade bottom key={`${exp.company}-${idx}-${selected}`}> {/* Ensure unique key for each experience */}
                  <Card size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {exp.badges.map((badge) => (
                          <Badge key={badge.name} colorScheme={badge.colorScheme}>
                            {badge.name}
                          </Badge>
                        ))}
                      </HStack>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

