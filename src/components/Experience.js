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
import { useState } from "react";

export default function Experience({ color }) {
  // Hardcoded experience data
  const experience = [
    {
      company: "Abbott",
      position: "Automation Intern",
      duration: "06/2023 - 09/2023",
      image: "../assets/logo514.png",
      tags: "Relevant",
      badges: [{ name: "Sylmar, CA", colorScheme: "blue" }],
      listItems: [
        "Programmed machine to perform measurements, enhancing automation capabilities for precise data acquisition.",
        "Proficient in identifying innovative engineering solutions and adept at applying a structured design and development process to bring concepts to fruition.",
        "Utilized CAD software to design fixtures specifically engineered for automation applications.",
      ],
    },
    {
      company: "Abbott",
      position: "Software Engineering Intern",
      duration: "06/2022 - 09/2022",
      image: "../assets/logo514.png",
      tags: "Relevant",
      badges: [{ name: "Santa Clara, CA", colorScheme: "blue" }],
      listItems: [
        "Processed technical setups within Visual Studio Code to help new team members and contractors access and write code.",
        "Design, code, test, debug, and document for projects and programs associated with software verification.",
        "Collaborate and consult with colleagues, peers, and managers to resolve technical challenges and achieve goals.",
      ],
    },
    {
      company: "Cal Poly IT",
      position: "Audio/Visual (AV) Student Assistant (Part time)",
      duration: "03/2022 - Present",
      image: "../assets/logo516.png",
      tags: "Other",
      badges: [{ name: "San Luis Obispo, CA", colorScheme: "green" }],
      listItems: [
        "Debug software and hardware problems for faculty (e.g. projectors, speakers, screens).",
        "Assist professors encountering technical difficulties during class.",
        "Perform routine inspections/maintenance on classroom technology.",
      ],
    },
    {
      company: "Abbott",
      position: "Quality Engineering Intern",
      duration: "06/2021 - 08/2021",
      image: "../assets/logo514.png",
      tags: "Other",
      badges: [{ name: "Fairfield, CA", colorScheme: "blue" }],
      listItems: [
        "Analyzed data to understand current and historical production performance and identified trends and areas in need of improvement.",
        "Inspected production floor equipment to identify any issues and implemented a corrective action to address the root cause and minimize any operational risks.",
        "Performed quality control to ensure compliance with manufacturing procedures and standards are being followed.",
      ],
    },
    {
      company: "Abbott",
      position: "Maintenance & Reliability Engineering Intern",
      duration: "06/2020 - 08/2020",
      image: "../assets/logo514.png",
      tags: "Other",
      badges: [{ name: "Fairfield, CA", colorScheme: "blue" }],
      listItems: [
        "Performed preventive maintenance to ensure motors and gearboxes were in good condition.",
        "Reconciled spare part inventory against the reference guides to identify any critical spare parts.",
        "Conducted safety procedures to minimize the risk of workplace injuries.",
      ],
    },
  ];

  // Define the two categories as options
  const options = [
    { value: "Relevant" },
    { value: "Other" },
  ];

  const [selected, setSelected] = useState("Relevant"); // Default to Relevant

  const handleSelected = (value) => {
    setSelected(value);
  };

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
              .filter((exp) => exp.tags === selected) // Filter by selected tag (Relevant/Other)
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
