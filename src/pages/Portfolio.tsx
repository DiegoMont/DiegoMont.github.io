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

import granitoDeArenaImage from "../assets/portfolio/granito-de-arena.jpg"
import mensajesDeEsperanzaImage from "../assets/portfolio/mensajes-esperanza.jpg"
import liverpoolQrImage from "../assets/portfolio/liverpool-qr.jpg"
import weWantImage from "../assets/portfolio/we-want.jpg"
import nautilusWebImage from "../assets/portfolio/nautilus-web.jpg"
import scoutingAppImage from "../assets/portfolio/scouting-app.jpg"
import geHealthcareImage from "../assets/portfolio/ge-healthcare.jpg"
import clubProgramacionImage from "../assets/portfolio/club-programacion.jpg"
import ftcProgrammingImage from "../assets/portfolio/ftc-programming.jpg"
import laConquistaImage from "../assets/portfolio/la-conquista.jpg"

type Project = {
    id: string
    title: string
    description: string
    image: string
    points: string[]
    tools: string
    links?: { label: string; href: string }[]
}

const projects: Project[] = [
    {
        id: "granito-de-arena",
        title: "Un Granito de Arena's Clinical Electronic Files System",
        description: "A web app to create and manage records for elders living in the nursing homes of Un Granito de Arena.",
        image: granitoDeArenaImage,
        points: [
            "Designed the user interface and database architecture.",
            "Built back-end functionality, including user accounts and data encryption.",
        ],
        tools: "PHP, MySQL, JavaScript",
    },
    {
        id: "mensajes-esperanza",
        title: "Mensajes de Esperanza Web Platform",
        description: "A web platform that lets family members of COVID-19 patients send text or voice messages to their relatives. Volunteer doctors receive and deliver the messages through the same platform.",
        image: mensajesDeEsperanzaImage,
        points: [
            "Developed the full app, from front end through back end.",
            "Participated in the platform's user interface design.",
        ],
        tools: "PHP, MySQL, HTML, CSS, JavaScript",
        links: [{ label: "Live demo", href: "https://mensajesdeesperanza.com.mx/" }],
    },
    {
        id: "liverpool-qr",
        title: "Todo Liverpool en un QR",
        description: "An extension of the Liverpool app that uses product QR codes to improve the customer experience inside stores.",
        image: liverpoolQrImage,
        points: [
            "Scan product QR codes to see available sizes, prices, and discounts in a store.",
            "Scan a store QR code to see which products from your wish list are available there.",
            "Earn points with every QR code scan and use them toward purchases.",
            "Discover clothing and accessories that match wish-list items in different outfits.",
        ],
        tools: "JavaScript, Firebase, HTML, Sass, Bootstrap",
        links: [
            { label: "Repository", href: "https://github.com/PedroRangelP/Todo-Liverpool-en-QR" },
            { label: "Live demo", href: "https://pedrorangelp.github.io/Todo-Liverpool-en-QR/" },
        ],
    },
    {
        id: "we-want",
        title: "We Want iOS App",
        description: "An iOS app that promotes social change by helping Mexico City residents report problems in public spaces through a points-based community program.",
        image: weWantImage,
        points: [
            "Browse community reports on a home map.",
            "Upload photos and use a machine-learning model to categorize issues.",
            "Identify important words in reports to improve map highlighting and search.",
            "Share user codes with friends and earn points by making reports.",
            "Exchange points for special coupons at participating stores.",
        ],
        tools: "Swift, Swift Storyboard, Firebase, Create ML, Microsoft Text Analytics API",
    },
    {
        id: "nautilus-website",
        title: "FRC Team Nautilus 4010 Website",
        description: "A website for Nautilus 4010, a high school robotics team competing in the FIRST Robotics Competition and spreading science and technology in the community.",
        image: nautilusWebImage,
        points: ["Visit the team's website."],
        tools: "",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/Nautilus-4010-Website" },
            { label: "Live demo", href: "https://nautilus4010.com" },
        ],
    },
    {
        id: "scouting-app",
        title: "FRC Scouting App",
        description: "A web app that gathers match data from FRC competitions and analyzes it to help select the best alliance partners.",
        image: scoutingAppImage,
        points: [
            "Designed a UI that lets one person scout multiple robots in a single match.",
            "Predicts the best options for forming an alliance after the elimination process.",
        ],
        tools: "PHP, MySQL, JavaScript, HTML, CSS",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/Programacion-FIRST/tree/master/Scouting-Nautilus" },
            { label: "Live demo", href: "https://diegomont.github.io/Programacion-FIRST/Scouting-Nautilus/Infinite_Recharge/InfiniteRecharge.html" },
        ],
    },
    {
        id: "ge-healthcare",
        title: "GE Healthcare Challenge",
        description: "A web app that displays information from an IoT incubator for doctors and parents.",
        image: geHealthcareImage,
        points: [
            "The doctor's dashboard displays incubator data and lets doctors write messages to parents.",
            "The parents' dashboard shows important messages and the baby's current state in a friendly interface.",
        ],
        tools: "JavaScript, HTML, CSS",
        links: [
            { label: "Repository", href: "https://github.com/DiegoMont/GE-Healthcare-HackMX" },
            { label: "Live demo", href: "https://diegomont.github.io/GE-Healthcare-HackMX/inicio-doctor.html" },
        ],
    },
    {
        id: "club-programacion",
        title: "Programming Club",
        description: "Solutions to problems from Codeforces, SPOJ, ICPC, and other programming competitions.",
        image: clubProgramacionImage,
        points: ["Dynamic programming, graphs, computational geometry, and other algorithms."],
        tools: "Java, C++, Python",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/ClubProgramacion" }],
    },
    {
        id: "programacion-first",
        title: "FIRST Tech Challenge",
        description: "Robot code for the FTC teams I have mentored: Naubots 15706, Hardlus 15704, and Robbit 15696.",
        image: ftcProgrammingImage,
        points: ["Autonomous robot programming", "Computer vision"],
        tools: "Java, FTC API, Vuforia",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/Programacion-FIRST/tree/master/FTC" }],
    },
    {
        id: "la-conquista",
        title: "The Conquest Videogame",
        description: "A role-playing game based on the Spanish conquest of the Aztec Empire.",
        image: laConquistaImage,
        points: ["Developed with JavaFX."],
        tools: "Java, JavaFX",
        links: [{ label: "Repository", href: "https://github.com/DiegoMont/ITC/tree/master/POO/LaConquista" }],
    },
]

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
                <Image src={liverpoolQrImage} alt="" position="absolute" inset="0" width="100%" height="100%" objectFit="cover" opacity="0.3" />
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
