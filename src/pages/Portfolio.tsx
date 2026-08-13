import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    List,
    Separator,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link as RouterLink } from "react-router"

import type Project from "../models/Project"
import projects from "../data/projects"

const SocialLinks = () => (
    <HStack gap="3" flexWrap="wrap">
        <SocialLink href="mailto:diegomonmar@hotmail.com" label="Email" icon={FaEnvelope} />
        <SocialLink href="https://github.com/DiegoMont" label="GitHub" icon={FaGithub} />
        <SocialLink href="https://www.linkedin.com/in/diegomonmar" label="LinkedIn" icon={FaLinkedin} />
    </HStack>
)

const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: typeof FaGithub }) => (
    <Link
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        display="inline-flex"
        alignItems="center"
        gap="2"
        color="blue.200"
        _hover={{ color: "blue.50", textDecoration: "none" }}
    >
        <Icon as={icon} boxSize="4" />
        <Text fontSize="sm">{label}</Text>
    </Link>
)

const SectionHeading = ({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) => (
    <Stack gap="2">
        {eyebrow ? <Text color="blue.300" fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">{eyebrow}</Text> : null}
        <Heading as="h2" size={{ base: "2xl", md: "3xl" }} fontWeight="medium" color="blue.50">
            {children}
        </Heading>
    </Stack>
)

const ProjectCard = ({ project }: { project: Project }) => (
    <Box
        id={project.id}
        scrollMarginTop="24"
        bg="gray.900"
        borderWidth="1px"
        borderColor="whiteAlpha.300"
        borderRadius="xl"
        overflow="hidden"
        shadow="xl"
    >
        <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Image src={project.image} alt="" objectFit="cover" minH={{ base: "220px", md: "100%" }} maxH={{ base: "300px", md: "none" }} />
            <Stack gap="5" p={{ base: "6", md: "8" }}>
                <Heading as="h3" size={{ base: "lg", md: "xl" }} fontWeight="medium" color="blue.50">
                    {project.title}
                </Heading>
                <Text color="gray.300" lineHeight="tall">{project.description}</Text>
                <List.Root gap="2" ps="5" color="gray.300">
                    {project.points.map((point) => <List.Item key={point}>{point}</List.Item>)}
                </List.Root>
                {project.tools ? (
                    <Text color="gray.300">
                        <Text as="span" fontWeight="bold" color="blue.200">Tools: </Text>
                        {project.tools}
                    </Text>
                ) : null}
                {project.links ? (
                    <Flex gap="3" flexWrap="wrap">
                        {project.links.map((link) => (
                            <Button key={link.href} asChild size="sm" variant="outline" colorPalette="blue">
                                <Link href={link.href} target="_blank" rel="noreferrer">{link.label}</Link>
                            </Button>
                        ))}
                    </Flex>
                ) : null}
            </Stack>
        </SimpleGrid>
    </Box>
)

const Portfolio = () => {
    const heroImage = projects.find((project) => project.id === "liverpool-qr")?.image ?? ""

    return (
        <Box bg="gray.950" color="gray.100" fontFamily="mono">
            <Box as="nav" position="sticky" top="0" zIndex="sticky" bg="gray.950" borderBottomWidth="1px" borderColor="whiteAlpha.300">
                <Container maxW="breakpoint-xl" py="3">
                    <Flex align="center" justify="space-between" gap="4">
                        <Link asChild color="blue.100" fontWeight="bold" _hover={{ textDecoration: "none", color: "blue.300" }}>
                            <RouterLink to="/portfolio">Diego Montaño</RouterLink>
                        </Link>
                        <HStack gap={{ base: "3", md: "6" }}>
                            <Link asChild color="gray.300" _hover={{ color: "blue.200", textDecoration: "none" }}>
                                <RouterLink to="/">Home</RouterLink>
                            </Link>
                            <Link asChild color="blue.200" textDecoration="underline" textUnderlineOffset="4px">
                                <RouterLink to="/portfolio">Projects</RouterLink>
                            </Link>
                        </HStack>
                    </Flex>
                </Container>
            </Box>

            <Box as="header" position="relative" overflow="hidden" minH={{ base: "560px", md: "620px" }} display="flex" alignItems="center">
                <Image src={heroImage} alt="" position="absolute" inset="0" width="100%" height="100%" objectFit="cover" opacity="0.3" />
                <Box position="absolute" inset="0" bg="blue.950" opacity="0.65" />
                <Container maxW="breakpoint-xl" position="relative" py={{ base: "20", md: "28" }}>
                    <Stack maxW="3xl" gap="6">
                        <Badge alignSelf="flex-start" colorPalette="blue" variant="subtle" px="3" py="1">Portfolio · Selected work</Badge>
                        <Heading as="h1" size={{ base: "4xl", md: "6xl" }} fontWeight="medium" color="blue.50" lineHeight="short">
                            Diego Montaño
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "2xl" }} color="blue.100" lineHeight="tall">
                            Computer Science and Technology graduate from Tecnológico de Monterrey, CCM, building useful products across web, mobile, and robotics.
                        </Text>
                        <SocialLinks />
                        <Button asChild alignSelf="flex-start" colorPalette="blue" variant="solid" size="lg">
                            <RouterLink to="/portfolio">Explore projects</RouterLink>
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <Container maxW="breakpoint-xl" py={{ base: "16", md: "24" }}>
                <Stack gap={{ base: "12", md: "20" }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                        <Box>
                            <SectionHeading eyebrow="About">A practical, people-centered builder.</SectionHeading>
                            <Text mt="5" color="gray.300" lineHeight="tall" maxW="60ch">
                                I enjoy turning complex problems into approachable tools, whether that means a clinical records system, a community platform, or software for competition robots.
                            </Text>
                        </Box>
                        <Stack gap="6" bg="blue.950" borderWidth="1px" borderColor="blue.800" borderRadius="xl" p={{ base: "6", md: "8" }}>
                            <ProfileItem title="Skills" value="Java, HTML, CSS, PHP, JavaScript, MySQL, Swift, C++" />
                            <ProfileItem title="Tools" value="Firebase, Git, GitHub, Xcode, Visual Studio Code, Cypress, Arduino" />
                        </Stack>
                    </SimpleGrid>

                    <Separator borderColor="whiteAlpha.300" />

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                        <Stack gap="4">
                            <SectionHeading eyebrow="Education">Computer Science and Technology</SectionHeading>
                            <Text color="gray.300" lineHeight="tall">B.S. at Tecnológico de Monterrey, 2018–2022.</Text>
                            <Text color="gray.400" lineHeight="tall">Relevant coursework included interactive design, object-oriented programming, probability and statistics, data structures, advanced databases, network interconnection, software quality and testing, and mobile application development.</Text>
                        </Stack>
                        <Stack gap="4">
                            <SectionHeading eyebrow="Leadership">Activities &amp; community</SectionHeading>
                            <List.Root gap="3" ps="5" color="gray.300">
                                <List.Item>Mentor of FRC Robotics Team Nautilus 4010 since 2016.</List.Item>
                                <List.Item>Programming Club member and ICPC participant since 2019.</List.Item>
                            </List.Root>
                        </Stack>
                    </SimpleGrid>

                    <Stack id="projects" gap="8" scrollMarginTop="24">
                        <SectionHeading eyebrow="Selected work">Projects</SectionHeading>
                        <Stack gap="8">
                            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
                        </Stack>
                    </Stack>

                    <Box bg="blue.950" borderWidth="1px" borderColor="blue.800" borderRadius="xl" p={{ base: "8", md: "12" }}>
                        <Stack gap="5">
                            <SectionHeading eyebrow="Contact">Let's build something useful.</SectionHeading>
                            <Text color="gray.300" maxW="60ch">Reach out if you want to talk about software, robotics, or a project that could use a thoughtful technical partner.</Text>
                            <SocialLinks />
                        </Stack>
                    </Box>
                </Stack>
            </Container>

            <Box as="footer" borderTopWidth="1px" borderColor="whiteAlpha.300" py="8">
                <Container maxW="breakpoint-xl">
                    <Text color="gray.500" fontSize="sm">&lt;/&gt; with ♥ by DiegoMont</Text>
                </Container>
            </Box>
        </Box>
    )
}

const ProfileItem = ({ title, value }: { title: string; value: string }) => (
    <Stack gap="1">
        <Text color="blue.200" fontWeight="bold">{title}</Text>
        <Text color="gray.300" lineHeight="tall">{value}</Text>
    </Stack>
)

export default Portfolio
