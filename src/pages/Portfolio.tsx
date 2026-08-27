import {
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
} from "@chakra-ui/react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

import type Project from "../models/Project"
import projects from "../data/projects"
import CenteredContainer from "../components/layout/CenteredContainer"

function SocialLinks() {
    return (
        <HStack gap="3" flexWrap="wrap">
            <SocialLink href="mailto:diegomonmar@hotmail.com" label="Email" icon={FaEnvelope} />
            <SocialLink href="https://github.com/DiegoMont" label="GitHub" icon={FaGithub} />
            <SocialLink href="https://www.linkedin.com/in/diegomonmar" label="LinkedIn" icon={FaLinkedin} />
        </HStack>
    )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: typeof FaGithub }) {
    return (
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
            <Icon as={icon} boxSize="6" />
            <Text fontSize="sm">{label}</Text>
        </Link>
    )
}

function SectionHeading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
    return (
        <Stack gap="2">
            {eyebrow ? <Text color="blue.300" fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">{eyebrow}</Text> : null}
            <Heading as="h2" size={{ base: "2xl", md: "3xl" }} fontWeight="medium" color="blue.50">
                {children}
            </Heading>
        </Stack>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
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
}

function ProfileItem({ title, value }: { title: string; value: string }) {
    return (
        <Stack gap="1">
            <Text color="blue.200" fontWeight="bold">{title}</Text>
            <Text color="gray.300" lineHeight="tall">{value}</Text>
        </Stack>
    )
}

function Portfolio() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <Box fontFamily="mono">
            <Box as="header" bg="blue.800" height="vh" display="flex" alignItems="center">
                <CenteredContainer>
                    <Stack gap="6" fontSize={{ base: "lg", md: "2xl" }} maxW="70ch" m="auto">
                        <Heading as="h1" size={{ base: "4xl", md: "6xl" }} fontWeight="medium" color="blue.50" lineHeight="short">
                            Diego Montaño
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "2xl" }} color="blue.100" lineHeight="tall">
                            Computer Science and Technology graduate from Tecnológico de Monterrey, CCM, building useful products across web, mobile, and robotics.
                        </Text>
                        <SocialLinks />
                        <Button onClick={scrollToProjects} alignSelf="flex-start" colorPalette="blue" variant="solid" size="lg">
                            Explore projects
                        </Button>
                    </Stack>
                </CenteredContainer>
            </Box>

            <Container maxW="breakpoint-xl" py={{ base: "16", md: "24" }}>
                <Stack gap={{ base: "12", md: "20" }}>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                        <Stack gap="4">
                            <SectionHeading eyebrow="Education">Master in Applied Artificial Intelligence. 2025</SectionHeading>
                            <Text color="gray.300" lineHeight="tall">Instituto Tecnológico y de Estudios Superiores de Monterery</Text>
                            <Heading as="h2" size={{ base: "2xl", md: "3xl" }} fontWeight="medium" color="blue.50">B. S. in Computer Science and Technology. 2022</Heading>
                            <Text color="gray.300" lineHeight="tall">Instituto Tecnológico y de Estudios Superiores de Monterery, Campus Ciudad de México</Text>
                            <Text color="gray.300" lineHeight="tall">CENEVAL Excellence Award - EGEL Software Engineering</Text>
                        </Stack>

                        <Stack gap="6" bg="blue.950" borderWidth="1px" borderColor="blue.800" borderRadius="xl" p={{ base: "6", md: "8" }}>
                            <ProfileItem title="Languages" value="Python, Java, PL/SQL, TypeScript, MySQL, C/C++, PHP" />
                            <ProfileItem title="Tools" value="PyTorch, Lightning, Oracle, GDAL, Git, Codex, Docker, Firebase, Django, HTML, CSS, Keras" />
                        </Stack>

                    </SimpleGrid>

                    <Separator borderColor="whiteAlpha.300" />

                    <Stack id="projects" gap="8" scrollMarginTop="24">
                        <SectionHeading eyebrow="Selected work">Projects</SectionHeading>
                        <Stack gap="8">
                            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
                        </Stack>
                    </Stack>

                    <Box bg="blue.950" borderWidth="1px" borderColor="blue.800" borderRadius="xl" p={{ base: "8", md: "12" }}>
                        <Stack gap="5">
                            <SectionHeading eyebrow="Contact">Let&#39;s build something useful.</SectionHeading>
                            <Text color="gray.300" maxW="60ch">Reach out if you want to talk about software, robotics, or a project that could use a thoughtful technical partner.</Text>
                            <SocialLinks />
                        </Stack>
                    </Box>
                </Stack>
            </Container>

            <Box as="footer" bg="blue.900" borderTopWidth="1px" borderColor="whiteAlpha.300" minH="50vh" py="8">
                <CenteredContainer>
                    <Text color="gray.500" fontSize="sm">&lt;/&gt; with ♥ by <Link href="https://github.com/DiegoMont" target="_blank" _hover={{ color: "blue.200" }}>DiegoMont</Link></Text>
                </CenteredContainer>
            </Box>
        </Box>
    )
}

export default Portfolio
